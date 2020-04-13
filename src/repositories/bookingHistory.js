import BookingHistory from '../models/bookingHistory';

export default {
    getCarsGroupedByBookingTimes: async () => {
        const carsDuplicates = await BookingHistory.aggregate(
            [
                {
                    $group:  {
                        _id: {
                            car_id: "$car_id"
                        },
                        count: {
                            $sum: 1
                        }
                    }
                }
            ])
        ;

        return carsDuplicates.map((carDuplicate) => {
                return {
                    carId: carDuplicate._id.car_id,
                    timesCount: carDuplicate.count
                }
        });
    },
};