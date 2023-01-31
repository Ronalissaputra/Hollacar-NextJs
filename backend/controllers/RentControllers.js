import RentModels from "../models/RentModels.js";

export const getRent = async (req, res, next) => {
  const currentPage = req.query.page || 1;
  const perPage = req.query.perPage || 20;
  let totalItems;

  RentModels.find()
    .countDocuments()
    .then((count) => {
      totalItems = count;
      return RentModels.find()
        .skip((currentPage - 1) * perPage)
        .limit(perPage);
    })
    .then((result) => {
      res.status(200).json({
        message: "Cars data successfully retrieved",
        data: result,
        total_data: totalItems,
      });
    })
    .catch((err) => {
      next(err);
    });
};

export const createRent = (req, res, next) => {
  const name = req.body.name;
  const numberphone = req.body.numberphone;
  const numberid = req.body.numberid;
  const address = req.body.address;
  const price = req.body.price;
  const namecar = req.body.namecar;
  const brandcar = req.body.brandcar;
  const description = req.body.description;
  const time = req.body.time;

  const Posting = RentModels({
    name: name,
    numberphone: numberphone,
    numberid: numberid,
    address: address,
    price: price,
    namecar: namecar,
    brandcar: brandcar,
    description: description,
    time: time,
  });

  Posting.save()
    .then((result) => {
      res.status(201).json({
        message: "Successful lease saved",
        data: result,
      });
    })
    .catch((err) => {
      console.log("err:", err);
    });
};

export const getRentById = (req, res, next) => {
  const rentId = req.params.rentId;

  RentModels.findById(rentId)
    .then((result) => {
      res.status(200).json({
        message: "RentId data retrieved successfully",
        data: result,
      });
    })
    .catch((err) => {
      next(err);
    });
};
