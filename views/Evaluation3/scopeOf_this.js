const object = {
  myMethod(data) {
    console.log(this);
    const callback = () => {
      console.log(this); // refers global methods/function
    };
    callback();
  }
};
object.myMethod(1);