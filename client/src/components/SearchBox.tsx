import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';

export default function SearchBox() {
  return (
    <div className="relative w-full sm:w-64">
      <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
      <Input
        type="search"
        placeholder="搜尋教學..."
        className="pl-9 bg-secondary/50 border-transparent focus-visible:border-primary w-full"
      />
    </div>
  );
}