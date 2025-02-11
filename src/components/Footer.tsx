import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="py-12 bg-primary-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-center">
          <Link
            to="/"
            onClick={() => window.scrollTo(0, 0)}
            className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 font-medium"
          >
            Back to Portfolio
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </footer>
  );
}