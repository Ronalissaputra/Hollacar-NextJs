import CarModel from "../models/CarModel.js";

export const getCar = async (req, res, next) => {
  const currentPage = req.query.page || 1;
  const perPage = req.query.perPage || 20;
  let totalItems;

  CarModel.find()
    .countDocuments()
    .then((count) => {
      totalItems = count;
      return CarModel.find()
        .skip((currentPage - 1) * perPage)
        .limit(perPage);
    })
    .then((result) => {
      res.status(200).json({
        message: "data Cars berhasil dipanggil",
        data: result,
        total_data: totalItems,
      });
    })
    .catch((err) => {
      next(err);
    });
};

export const createCar = (req, res, next) => {
  const image = req.file.path;
  const namecar = req.body.namecar;
  const brandcar = req.body.brandcar;
  const price = req.body.price;
  const description = req.body.description;

  const Posting = CarModel({
    image: image,
    namecar: namecar,
    brandcar: brandcar,
    price: price,
    description: description,
  });

  Posting.save()
    .then((result) => {
      res.status(201).json({
        message: "Create Cars Successfully",
        data: result,
      });
    })
    .catch((err) => {
      console.log("err:", err);
    });
};

export const getCarById = (req, res, next) => {
  const carId = req.params.carId;

  CarModel.findById(carId)
    .then((result) => {
      res.status(200).json({
        message: "CarId data retrieved successfully",
        data: result,
      });
    })
    .catch((err) => {
      next(err);
    });
};
