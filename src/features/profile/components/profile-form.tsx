```typescript
"use client"

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { useUserProfile } from "@/shared/hooks/use-user-profile"
import { Input } from "@/shared/components/ui/input"
import { Textarea } from "@/shared/components/ui/textarea"
import { Button } from "@/shared/components/ui/button"
import { toast } from "sonner"

const profileSchema = z.object({
  displayName: z.string().min(2).max(50).nullable(),
  bio: z.string().max(160).nullable(),
  website: z.string().url().nullable(),
  location: z.string().max(100).nullable(),
  githubUsername: z.string().max(39).nullable(),
  twitterUsername: z.string().max(15).nullable(),
})

type ProfileFormData = z.infer<typeof profileSchema>

export function ProfileForm() {
  const { profile, updateProfile } = useUserProfile()
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<ProfileFormData>({
    resolver: zodResolver(profileSchema),
    defaultValues: profile || undefined
  })

  const onSubmit = async (data: ProfileFormData) => {
    try {
      await updateProfile(data)
      toast.success("Profile updated successfully")
    } catch (error) {
      toast.error("Failed to update profile")
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div className="space-y-2">
        <Input
          placeholder="Display Name"
          {...register("displayName")}
        />
        {errors.displayName && (
          <p className="text-sm text-red-500">{errors.displayName.message}</p>
        )}
      </div>

      <div className="space-y-2">
        <Textarea
          placeholder="Bio"
          {...register("bio")}
        />
        {errors.bio && (
          <p className="text-sm text-red-500">{errors.bio.message}</p>
        )}
      </div>

      <div className="space-y-2">
        <Input
          placeholder="Website"
          {...register("website")}
        />
        {errors.website && (
          <p className="text-sm text-red-500">{errors.website.message}</p>
        )}
      </div>

      <div className="space-y-2">
        <Input
          placeholder="Location"
          {...register("location")}
        />
        {errors.location && (
          <p className="text-sm text-red-500">{errors.location.message}</p>
        )}
      </div>

      <div className="space-y-2">
        <Input
          placeholder="GitHub Username"
          {...register("githubUsername")}
        />
        {errors.githubUsername && (
          <p className="text-sm text-red-500">{errors.githubUsername.message}</p>
        )}
      </div>

      <div className="space-y-2">
        <Input
          placeholder="Twitter Username"
          {...register("twitterUsername")}
        />
        {errors.twitterUsername && (
          <p className="text-sm text-red-500">{errors.twitterUsername.message}</p>
        )}
      </div>

      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full"
      >
        {isSubmitting ? "Saving..." : "Save Profile"}
      </Button>
    </form>
  )
}
```