import Plan from "../models/Plan.js";

export const getAllPlans = async (_req, res) => {
  try {
    const plans = await Plan.find();

    res.status(200).json(plans);
  }catch(e) {
    console.error(e);

    res.status(500).json(e);
  }
}

export const getPlan = async (req, res) => {
  const { id } = req.params;

  try {
    const plan = await Plan.findById(id);

    if(plan) return res.status(200).json(plan);

    res.status(404).json({ message: "El Plan no se encontró" });
  }catch(e) {
    console.error(e);

    res.status(500).json(e);
  }
}

export const createPlan = async (req, res) => {
  const { name, description, price, benefits, remaining } = req.body;

  try {
    const newPlan = new Plan({
      name,
      description,
      price,
      benefits,
      remaining
    });

    const planSaved = await newPlan.save();

    res.status(201).json(planSaved);
  }catch(e) {
    console.error(e);

    res.status(500).json(e);
  }
}

export const updatePlan = async (req, res) => {
  const { id } = req.params;

  try {
    const updatedPlan = await Plan.findByIdAndUpdate(
      id,
      req.body,
      { new: true }
    );

    res.status(200).json(updatedPlan);
  }catch(e) {
    console.error(e);

    res.status(500).json(e);
  }
}

export const deletePlan = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedPlan = await Plan.findByIdAndDelete(id);

    if(deletedPlan) return res.status(204).json();

    res.status(404).json({ message: "El Plan no se encontró" });
  }catch(e) {
    console.error(e);

    res.status(500).json(e);
  }
}
