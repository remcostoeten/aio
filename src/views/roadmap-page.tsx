export default function RoadmapPage() {
  return (
    <div className="container py-10">
      <h1 className="text-4xl font-bold mb-6">Roadmap</h1>
      <div className="space-y-8">
        <div>
          <h2 className="text-2xl font-semibold mb-2">Q2 2024</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Enhanced user profiles</li>
            <li>Team collaboration features</li>
            <li>Advanced analytics dashboard</li>
          </ul>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-2">Q3 2024</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>API integrations</li>
            <li>Custom workflows</li>
            <li>Mobile app release</li>
          </ul>
        </div>
      </div>
    </div>
  )
} 
