import express from 'express';
import { RideSchema, RideSchemaType } from '../schemas/rides.schema';
import validate from '../middleware/Validate';

const router = express.Router();

let Rides: RideSchemaType[] = [];


router.get('/allrides',(req,res) => {
    res.json({
        Rides
    });

});

router.post('/createride',validate(RideSchema), (req,res)=> {
    const newRide = req.body;
    Rides.push(newRide);
    res.status(201).json({
        message:"New Ride is added!"
    })
});

router.put('/updateride/:id',validate(RideSchema),(req,res)=> {
    const {id} = req.params;
    const updatedRide = req.body as RideSchemaType;
    const updetedRidesList = Rides.filter((item) => {
        return item.id !== id;
      });
      updetedRidesList.push(updatedRide);
      Rides = updetedRidesList;
      res.status(200).json({
        message:'Ride is updated!'
      });

 });

router.delete('/removeride/:id',validate(RideSchema),(req,res)=> {
    const {id} = req.params;
    const deleteRide = Rides.filter((item) => {
        return item.id !== id;
      });
      Rides = deleteRide;
      res.json({
        message:'Ride is Deleted!'
      });
});

export default router;