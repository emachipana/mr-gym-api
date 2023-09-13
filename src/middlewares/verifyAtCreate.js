export const isOwnerOrAdmin = async (req, res, next) => {
  const { user } = req;
  const { id } = req.params;

  try {
    if(user.user_type !== "admin" && user.id !== id)
      return res
                .status(401)
                .json({ 
                  message: "Tienes que ser el propietario o administrador para realizar esta acción"
                });

    next();
  }catch(e){
    console.error(e);

    res.status(500).json(e);
  }
}
