import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export default function Home() {
  const blogPosts = [
    {
      id: 1,
      title: 'Getting Started with React',
      content: 'Learn the basics of React and how to set up your first project.',
      date: '2023-10-01',
    },
    {
      id: 2,
      title: 'Building a Blog with React',
      content: 'A step-by-step guide to creating a simple blog using React.',
      date: '2023-10-05',
    },
    {
      id: 3,
      title: 'Styling with TailwindCSS',
      content: 'How to use TailwindCSS to style your React applications.',
      date: '2023-10-10',
    },
  ];

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Welcome to My Blog</h1>
      <div className="space-y-4">
        {blogPosts.map((post) => (
          <Card key={post.id} className="p-4">
            <h2 className="text-xl font-semibold">{post.title}</h2>
            <p className="text-gray-600 mt-2">{post.content}</p>
            <p className="text-sm text-gray-400 mt-2">Published on: {post.date}</p>
            <Button variant="outline" className="mt-4">
              Read More
            </Button>
          </Card>
        ))}
      </div>
    </div>
  );
}
