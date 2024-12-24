create table search_analytics (
  id uuid default uuid_generate_v4() primary key,
  query text not null,
  result_count integer not null,
  selected_result jsonb,
  duration integer not null,
  timestamp timestamptz not null default now(),
  user_id uuid references auth.users(id)
);

-- Indexes for analytics queries
create index search_analytics_query_idx on search_analytics(query);
create index search_analytics_timestamp_idx on search_analytics(timestamp);
create index search_analytics_user_id_idx on search_analytics(user_id);

-- View for popular searches
create view popular_searches as
select 
  query,
  count(*) as search_count,
  count(selected_result) as click_count,
  avg(duration) as avg_duration
from search_analytics
where timestamp > now() - interval '7 days'
group by query
order by search_count desc; 
