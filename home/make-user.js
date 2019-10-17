function makeUser(formData) {
    const user = {
        name: formData.get('name'),
        character: formData.get('character'),
        // stretch goal make distillate and honor depend on character choice
        distillate: 3,
        honor: 0,
        heirFound: 0,
        trueHeirFound: 0,
        completed: {}
    };

    return user;
}

export default makeUser;