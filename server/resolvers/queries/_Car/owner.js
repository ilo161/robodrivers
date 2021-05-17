module.exports = async(_parent, args,{ models }) => {
    console.log("owner", _parent.owner)
    const theOwner = await models.User.findById({_id: _parent.owner})
    console.log("OOO",theOwner)
    return  theOwner
}