class BookingPage {
  getBookings(token) {
    return cy.request({
      method: 'GET',
      url: 'https://restful-booker.herokuapp.com/booking',
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });
  }

  createBooking(token, bookingData) {
    return cy.request({
      method: 'POST',
      url: 'https://restful-booker.herokuapp.com/booking',
      headers: {
        'Authorization': `Bearer ${token}`
      },
      body: bookingData
    })
  }

  updateBooking(token, bookingId, updatedBookingData) {
    return cy.request({
      method: 'PUT',
      url: `https://restful-booker.herokuapp.com/booking/${bookingId}`,
      headers: {
        'Authorization': `Bearer ${token}`
      },
      body: updatedBookingData
    })
  }

  deleteBooking(token, bookingId) {
    return cy.request({
      method: 'DELETE',
      url: `https://restful-booker.herokuapp.com/booking/${bookingId}`,
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });
  }

  partiallyUpdateBooking(token, bookingId, partialBookingData) {
    return cy.request({
      method: 'PATCH',
      url: `https://restful-booker.herokuapp.com/booking/${bookingId}`,
      headers: {
        'Authorization': `Bearer ${token}`
      },
      body: partialBookingData
    })
  }
}

export default new BookingPage();
