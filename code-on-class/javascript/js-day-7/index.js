// function object

function Student(id, name, className) {
  this.id = id;
  this.name = name;
  this.className = className;
  this.say = function () {
    console.log("Hello, myname is" + this.name);
  };
}

var quy = new Student("1", quy, "reactjs2004");
quy.school = "abc";
quy.say();

var quySay = quy.say.bind(this);

quySay();
var dat = new Student(2, "dat", "reactjs2004");
console.log("quy", quy);

// introduce bind()

var camera = function (mathStudying) {
  mathStudying();
};

// window.name = 'camera';

var student = {
  name: "minh",
  study: function () {
    console.log(this.name + " is studying ...");
    var mathStudying = function () {
      console.log(this.name + " is studying math");
    }.bind(this);
    var mathStudying = () => {
      console.log(`${this.name} is studying math`);
    };
    mathStudying();
    camera(mathStudying);
  },
};

student.study();

// callbacks

function doTasks() {
  console.log("starting do tasks ...");
  var quy = setTimeout(() => {
    console.log("done thinking ...");
    console.log("starting cooking rice");
    var dat = setTimeout(() => {
      console.log("done cooking rice ...");
      var minh = setTimeout(() => {
        console.log("done cooking soup");
      }, 3000);
    }, 2000);
    console.log("starting cooking soup");
    // var minh = setTimeout(()=> {
    //   console.log('done cooking soup');
    // }, 3000);
  }, 1000);
}

var cookingSoup = () => {
  console.log("done cooking soup");
};

var cookingRice = () => {
  console.log("starting");
};

// doTasks();
// console.log('continue....');

// promise
var goodStudent = true;
var buyCar = new Promise((resolve, reject) => {
  // bản chất của promise là 1 callback function
  // hàm then để các bất đồng bộ thành đồng bộ
  // pending trong promise là đang chờ ...
  if (goodStudent) {
    setTimeout(() => {
      console.log("Buying car ...");
      resolve({ name: "Lambogini", weight: 850 });
      // để gọi được hàm trong then thì gọi resolve()
      // data trong hàm then được truyền trong hàm resolve
    }, 3000);
  } else {
    reject({ reason: "Not good student" });
  }
});

var goodBoy = true;
var hangout = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (goodBoy) {
      resolve({ status: true });
    } else {
      reject({ status: false });
    }
  }, 2000);
});

// after buy car then drive

var hangoutCallback = (resolve, reject) => {
  setTimeout(() => {
    if (goodBoy) {
      resolve({ status: true });
    } else {
      reject({ status: false });
    }
  }, 2000);
};

buyCar
  .then((car) => {
    console.log(car);
    console.log("driving car ...", car.name + " " + car.weight);
    // have a girlfriend
    // hangout
    //   .then((data) => {
    //     console.log("You are the luckies in the world", data);
    //   })
    //   .catch((data) => {
    //     console.log("good luck in next time", data);
    //   });
    return new Promise(hangoutCallback);
  })
  .then((hangoutStatus) => {
    console.log(hangoutStatus);
  })
  .catch((result) => {
    console.log("don't buy car because " + result.reason);
  });

console.log("living ...");
// living ... vẫn dược chạy không bị chặn (block)

async function buyCarAsync() {
  var result = await new Promise(hangoutCallback);
  // dùng asyn và dùng await thì phải đợi Promise thực hiện xong mới chạy hello
  console.log("hello world");
  console.log("result:", result);
  return result;
}

buyCarAsync();

async function myLife() {
  console.log("start");
  var result = await new Promise(hangoutCallback);
  console.log("Result:", result);
  var status = await new Promise(hangoutCallback);
  console.log("Status:", status);
  console.log("end");
}

myLife();

console.log("Living ...");

// class

class StudentTemplate {
  constructor(id, name, age, className) {
    this.id = id;
    this.name = name;
    this.age = age;
    this.className = className;
  }
  // study() {
  //   console.log(this.name + " is studying ...");
  // }
  study = () => {
    console.log(this.name + ' is stuyding ...');
  }
}

var quy = new StudentTemplate(1, "quy", 22, "reactjs2004");
var khang = new StudentTemplate(2, "khang", 22, "reactjs2004");
console.log(khang, typeof khang);
console.log(quy, typeof quy);
khang.study();
quy.study();

// tình trừu tượng: vd: class student thì chỉ lấy những props tượng trưng như tên, tuổi, lớp, ... không lấy những thứ như tay, chân ...
