-- Add role column to users
alter table auth.users 
add column role text not null default 'user'
check (role in ('user', 'admin'));

-- Create admin role policy
create policy "Only admins can access analytics"
  on search_analytics
  for all
  using (auth.jwt() ->> 'role' = 'admin');

-- Function to auto-assign admin role
create or replace function handle_new_user() 
returns trigger as $$
begin
  if new.email = current_setting('app.admin_email', true) then
    new.role := 'admin';
  end if;
  return new;
end;
$$ language plpgsql security definer;

-- Trigger for new user registration
create trigger on_auth_user_created
  before insert on auth.users
  for each row
  execute procedure handle_new_user(); 
