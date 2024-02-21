import BookingPage from '../apiFunctionFolder/BookingsPage';
import Token from '../apiFunctionFolder/Token';

describe('API Tests', () => {
    let token;
    let data

    before(() => {
        cy.fixture("apiData").then((jsonData) => {
            data = jsonData;
        })


    })
    it('create token', () => {
        Token.createToken(data.apiAuth.username, data.apiAuth.password).then(response => {
            expect(response.status).to.equal(200);
            expect(response.body).to.have.property('token');
            token = response.body.token;;
        });
    })


    it('Gets bookings', () => {
        BookingPage.getBookings(token).then(bookings => {
            expect(bookings.status).to.equal(200);
        });
    });
    it('create Booking Id', () => {

        const bookingData = {
            "firstname": data.apiData.bookingData.Firstname,
            "lastname": data.apiData.bookingData.lastname,
            "totalprice": data.apiData.bookingData.totalprice,
            "depositpaid": data.apiData.bookingData.depositpaid,
            "bookingdates": {
                "checkin": data.apiData.bookingData.checkin,
                "checkout": data.apiData.bookingData.checkout
            },
            "additionalneeds": data.apiData.bookingData.additionalneeds

        }
        BookingPage.createBooking(token, bookingData).then(createdBooking => {
            expect(createdBooking.status).to.equal(200);
        })
    })

    it('Creates, updates, and deletes a booking', () => {
        let bookingId;
        const bookingData = {
            "firstname": data.apiData.bookingData.Firstname,
            "lastname": data.apiData.bookingData.lastname,
            "totalprice": data.apiData.bookingData.totalprice,
            "depositpaid": data.apiData.bookingData.depositpaid,
            "bookingdates": {
                "checkin": data.apiData.bookingData.checkin,
                "checkout": data.apiData.bookingData.checkout
            },
            "additionalneeds": data.apiData.bookingData.additionalneeds

        }

        BookingPage.createBooking(token, bookingData).then(createdBooking => {
            bookingId = createdBooking.bookingid;
            expect(createdBooking.status).to.equal(200);
            const updatedBookingData = {

                "firstname": data.apiData.updatedBookingData.Firstname,
                "lastname": data.apiData.updatedBookingData.lastname,
                "totalprice": data.apiData.updatedBookingData.totalprice,
                "depositpaid": data.apiData.updatedBookingData.depositpaid,
                "bookingdates": {
                    "checkin": data.apiData.updatedBookingData.checkin,
                    "checkout": data.apiData.updatedBookingData.checkout
                },
                "additionalneeds": data.apiData.updatedBookingData.additionalneeds

            };
            BookingPage.updateBooking(token, bookingId, updatedBookingData).then(updatedBooking => {

                expect(updatedBooking.status).to.equal(200);
            });


            BookingPage.deleteBooking(token, bookingId).then((response) => {
                expect(response.status).to.equal(200);
            });
        });
    });

    it('Partially updates a booking', () => {
        let bookingId;
        const bookingData = {
            "firstname": data.apiData.bookingData.Firstname,
            "lastname": data.apiData.bookingData.lastname,
            "totalprice": data.apiData.bookingData.totalprice,
            "depositpaid": data.apiData.bookingData.depositpaid,
            "bookingdates": {
                "checkin": data.apiData.bookingData.checkin,
                "checkout": data.apiData.bookingData.checkout
            },
            "additionalneeds": data.apiData.bookingData.additionalneeds

        }
        
        BookingPage.createBooking(token, bookingData).then(createdBooking => {
            bookingId = createdBooking.bookingid;
            expect(createdBooking.status).to.equal(200);            
            const partialBookingData = {
                "firstname": data.apiData.partialBookingData.firstname,
                "lastname": data.apiData.partialBookingData.lastname
            };
            BookingPage.partiallyUpdateBooking(token, bookingId, partialBookingData).then(updatedBooking => {
                expect(updatedBooking.status).to.equal(200);
            });
        });
    });
});
