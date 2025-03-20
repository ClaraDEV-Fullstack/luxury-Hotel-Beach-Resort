import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, Users, Maximize2 } from 'lucide-react';
import './RoomsPage.css';


export function RoomsPage() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState('all');
  const [priceRange, setPriceRange] = useState([0, 2000]);
  const [rooms, setRooms] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [roomsPerPage] = useState(6); // Display 6 rooms per page

  // Fetch rooms from db.json
  useEffect(() => {
    fetch('/db.json') // Fetch the static JSON file
        .then((response) => {
          if (!response.ok) throw new Error('Failed to fetch rooms');
          return response.json();
        })
        .then((data) => {
          setRooms(data.rooms || []); // Update the rooms state with fetched data
          setLoading(false); // Stop loading once data is fetched
        })
        .catch((err) => {
          setError(err.message); // Set error message if fetch fails
          setLoading(false); // Stop loading even if there's an error
        });
  }, []);

  // Filter rooms based on search term, type, and price range
  const filteredRooms = rooms.filter((room) => {
    const matchesSearch =
        room.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        room.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = selectedType === 'all' || room.type === selectedType;
    const matchesPrice = room.price >= priceRange[0] && room.price <= priceRange[1];
    return matchesSearch && matchesType && matchesPrice;
  });

  // Get current rooms for pagination
  const indexOfLastRoom = currentPage * roomsPerPage;
  const indexOfFirstRoom = indexOfLastRoom - roomsPerPage;
  const currentRooms = filteredRooms.slice(indexOfFirstRoom, indexOfLastRoom);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Go to the next page
  const nextPage = () => {
    if (currentPage < Math.ceil(filteredRooms.length / roomsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  // Go to the previous page
  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  // Get unique room types for the dropdown
  const roomTypes = [...new Set(rooms.map((room) => room.type))];

  if (loading) {
    return <div className="loading">Loading rooms...</div>;
  }

  if (error) {
    return <div className="error">Error: {error}</div>;
  }

  return (
      <div className="rooms-page">
        {/* Hero Section */}
        <div
            className="hero-section"
            style={{
              backgroundImage: `url('https://iun.www.vaxvacationaccess.com/globalassets/suppliers/iun/images/showcase_images/23-uor-2933861_ous23_uor_banner_re-designs_vax_updates_vax_site_cyovp_guestroom_674x318.jpg')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              minHeight: '100vh',
              width: '100%',
            }}
        >

        </div>

        {/* Modern Filters Section */}
        <div className="filters-section">
          <h2>Find Your Perfect Room</h2>
          <div className="filter-group">
            {/* Search Input */}
            <div className="filter-input">
              <Search size={18} className="filter-icon" />
              <input
                  type="text"
                  placeholder="Search rooms..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            {/* Room Type Filter */}
            <div className="filter-input">
              <Users size={18} className="filter-icon" />
              <select
                  value={selectedType}
                  onChange={(e) => setSelectedType(e.target.value)}
              >
                <option value="all">All Room Types</option>
                {roomTypes.map((type) => (
                    <option key={type} value={type}>
                      {type.charAt(0).toUpperCase() + type.slice(1)}
                    </option>
                ))}
              </select>
            </div>

            {/* Price Range Filter */}
            <div className="filter-input price-range">
              <Maximize2 size={18} className="filter-icon" />
              <label>
                Price Range: ${priceRange[0]} - ${priceRange[1]}
              </label>
              <div className="range-inputs">
                <input
                    type="range"
                    min="0"
                    max="2000"
                    step="100"
                    value={priceRange[0]}
                    onChange={(e) => setPriceRange([parseInt(e.target.value), priceRange[1]])}
                />
                <input
                    type="range"
                    min="0"
                    max="2000"
                    step="100"
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Room Grid */}
        <div className="room-grid">
          {currentRooms.length > 0 ? (
              currentRooms.map((room) => (
                  <div
                      key={room.id}
                      className="room-card"
                      onClick={() => navigate(`/rooms/${room.id}`)}
                  >
                    <img src={room.image} alt={room.title} />
                    <div className="room-card-content">
                      <h3>{room.title}</h3>
                      <p>{room.description}</p>
                      <button>View Details</button>
                    </div>
                  </div>
              ))
          ) : (
              <p className="no-results">No rooms match your filters.</p>
          )}
        </div>

        {/* Modern Pagination */}
        <div className="pagination">
          <button
              onClick={prevPage}
              disabled={currentPage === 1}
              className={currentPage === 1 ? 'disabled' : ''}
          >
            Previous
          </button>
          <span>
          Page {currentPage} of {Math.ceil(filteredRooms.length / roomsPerPage)}
        </span>
          <button
              onClick={nextPage}
              disabled={currentPage === Math.ceil(filteredRooms.length / roomsPerPage)}
              className={currentPage === Math.ceil(filteredRooms.length / roomsPerPage) ? 'disabled' : ''}
          >
            Next
          </button>
        </div>
      </div>
  );
}