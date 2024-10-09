

type InputFindRecepieProps = {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  category: string;
  setCategory: (category: string) => void;
  categories: string[];
};

function InputFindRecepie({
  searchTerm,
  setSearchTerm,
  category,
  setCategory,
  categories,
}: InputFindRecepieProps) {
  return (
    <div className="bg-gray-300 h-32 m-3 p-3 flex flex-col items-center justify-center">
      <div className="mb-4">
        <p>Find recipes</p>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search by name"
          className="ml-2 p-2 rounded border"
        />
      </div>

      <div>
        <label htmlFor="category" className="mr-2">Filter by category:</label>
        <select
          id="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="p-2 rounded border"
        >
          <option value="">All categories</option>
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default InputFindRecepie;
