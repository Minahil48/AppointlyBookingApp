import React, { useEffect, useState } from "react";

const AdminDashboard = () => {
  const [bookings, setBookings] = useState([]);
  const [earnings, setEarnings] = useState(0);

  useEffect(() => {
    fetchBookings();
  }, []);

  const fetchBookings = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/admin/bookings");
      const data = await res.json();

      if (res.ok) {
        setBookings(data);
        const total = data.reduce((sum, b) => sum + (b.hotelPrice || 0), 0);
        setEarnings(total);
      }
    } catch (err) {
      console.error("Error fetching bookings:", err);
    }
  };

  const deleteBooking = async (id) => {
    if (!window.confirm("Are you sure you want to delete this booking?")) return;
    try {
      const res = await fetch(`http://localhost:5000/api/admin/bookings/${id}`, {
        method: "DELETE",
      });
      if (res.ok) {
        setBookings(bookings.filter((b) => b._id !== id));
      }
    } catch (err) {
      console.error("Error deleting booking:", err);
    }
  };

  const updateDate = async (id, newDate) => {
    try {
      const res = await fetch(`http://localhost:5000/api/admin/bookings/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ date: newDate }),
      });
      if (res.ok) {
        const updated = await res.json();
        setBookings((prev) =>
          prev.map((b) => (b._id === updated._id ? updated : b))
        );
      }
    } catch (err) {
      console.error("Error updating date:", err);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-10">
      <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-3xl font-bold mb-4 text-center text-blue-700">
          Admin Dashboard
        </h1>
        <p className="text-lg font-semibold text-green-600 mb-6">
          Total Earnings: ${earnings}
        </p>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-blue-100">
                <th className="border p-2">Booking ID</th>
                <th className="border p-2">User ID</th>
                <th className="border p-2">Hotel</th>
                <th className="border p-2">Date</th>
                <th className="border p-2">Price</th>
                <th className="border p-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {bookings.map((b) => (
                <tr key={b._id} className="hover:bg-gray-50">
                  <td className="border p-2">{b._id}</td>
                  <td className="border p-2">{b.userId}</td>
                  <td className="border p-2">{b.hotelName}</td>
                  <td className="border p-2">
                    <input
                      type="date"
                      value={b.date}
                      onChange={(e) => updateDate(b._id, e.target.value)}
                      className="border rounded px-2"
                    />
                  </td>
                  <td className="border p-2">${b.hotelPrice}</td>
                  <td className="border p-2">
                    <button
                      onClick={() => deleteBooking(b._id)}
                      className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
              {bookings.length === 0 && (
                <tr>
                  <td colSpan="6" className="text-center text-gray-500 p-4">
                    No bookings found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
