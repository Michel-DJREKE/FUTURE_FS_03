import { categories, type Category } from "@/data/products";

interface CategoryPillsProps {
  selected: Category;
  onSelect: (cat: Category) => void;
}

const CategoryPills = ({ selected, onSelect }: CategoryPillsProps) => {
  return (
    <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-none -mx-4 px-4 md:mx-0 md:px-0 md:flex-wrap">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => onSelect(cat)}
          className={`whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 shrink-0 ${
            selected === cat
              ? "bg-primary text-primary-foreground shadow-md"
              : "bg-secondary text-muted-foreground hover:bg-secondary/80"
          }`}
        >
          {cat}
        </button>
      ))}
    </div>
  );
};

export default CategoryPills;
