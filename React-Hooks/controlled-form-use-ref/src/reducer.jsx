const reducer = (count, action) => {
    if(action.type === "INC"){
        return (count = count + 1)

    }
    if(action.type === "DEC"){
        return (count = count - 1)

    }
    return count;
}
export default reducer;