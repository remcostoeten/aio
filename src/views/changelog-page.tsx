export default function ChangelogPage() {
  return (
    <div className="container py-10">
      <h1 className="text-4xl font-bold mb-6">Changelog</h1>
      <div className="space-y-8">
        <div>
          <h2 className="text-2xl font-semibold mb-2">Version 1.0.0</h2>
          <p className="text-muted-foreground mb-4">Released on March 15, 2024</p>
          <ul className="list-disc list-inside space-y-2">
            <li>Initial release</li>
            <li>Authentication with email and OAuth providers</li>
            <li>Admin role management</li>
            <li>Protected routes</li>
          </ul>
        </div>
      </div>
    </div>
  )
} 
