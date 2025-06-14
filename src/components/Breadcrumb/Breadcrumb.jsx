export default function Breadcrumb() {
    return (
      <nav aria-label="Breadcrumb" className="text-gray-600 text-sm mb-6 select-none">
        <ol className="list-reset flex space-x-2">
          <li><a className="hover:text-[#3DF4A6]" href="#">Home</a></li>
          <li>/</li>
          <li><a className="hover:text-[#3DF4A6]" href="#">Auto Accessories</a></li>
          <li>/</li>
          <li aria-current="page" className="font-bold">Velvet Pink Steering Wheel Sleeves</li>
        </ol>
      </nav>
    );
  }
  