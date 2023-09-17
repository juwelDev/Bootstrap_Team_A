const person = [
    {
      id: 1,
      img: "assets/images/Asia Cup Logo.avif",
      title: "India’s 8th or 7th for Sri Lanka?",
      discription:
      "India will have an eye on extending their record haul while Sri Lanka would want to get level with the...",

      link : "htmlfile/bangladesh.html",
    },
    {
      id: 1,
      img: "./assets/image/378242316_298362322829732_6322375367558857617_n.avif ",
      title: "স্টার মাল্টিমিডিয়া",
      discription: "নির্দলীয় সরকারের হাতে ক্ষমতা তুলে দিন: মির্জা ফখরুল ",
      link: "./htmlfile/bangadesh.html",
    },

  ];
  
  let personData = "";
  person.forEach(function (item) {
    personData += ` 
    <div class="card m-3 border">
    <img
      src="${item.img}"
      alt="..."
    />
    <div class="card-body">
      <h5 class="card-title">${item.title}</h5>
      <p class="card-text">
        ${item.discription}
      </p>
      <a href="${item.link}" class="btn btn-primary">More Details</a>
    </div>
  </div> 
  `;
  });
  
  document.getElementById("row").innerHTML = personData;