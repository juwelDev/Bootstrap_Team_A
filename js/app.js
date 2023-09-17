const data = [
  {
    id: 1,
    title: "WebDev",
    date: "02 Sep 2023",
    description:
      "One of the greater mistakes of folks using Node.js is having asynchronous functions as handlers with Event Emitter. Do you know why?",
    img: "https://res.cloudinary.com/daily-now/image/upload/s--3B1fh4kU--/f_auto,q_auto/v1/squads/94fc7a56-e6d2-403f-acd6-b988b426574f",
    href: "blog1.html",
  },
  {
    id: 2,
    title: "Bun 1.0",
    date: "05 Sep 2023",
    description:
      "Bun is a fast, all-in-one toolkit for running, building, testing, and debugging JavaScript and TypeScript. Bun's goal is to eliminate slowness and complexity without throwing away everything that's great about JavaScript. Bun is tested against test suites of the most popular Node.js packages on Node.",
    img: "https://res.cloudinary.com/daily-now/image/upload/t_logo,f_auto/v1655817725/logos/community",
    href: "blog2.html",
  },
  {
    id: 3,
    title: "Bootcamp",
    date: "02 Sep 2023",
    description:
      "As a backend developer, you play a crucial role in designing and implementing the server-side logic that powers applications. In this article, we will explore a range of project ideas that can help you level up your backend development skills, demonstrate your proficiency in handling advanced concepts, and pave the way for a senior-level developer role.",
    img: "https://res.cloudinary.com/daily-now/image/upload/t_logo,f_auto/v1/logos/783d406409974af0b6d330edc3d09048",
    href: "blog3.html",
  },
  {
    id: 4,
    title: "DZone",
    date: "07 Sep 2023",
    description:
      "The Future of Web Development: Predictions and Possibilities Discover the future of web development. Explore AI, PWAs, VR, and more. Get insights on possibilities and the role of web developers.",
    img: "https://res.cloudinary.com/daily-now/image/upload/t_logo,f_auto/v1/logos/dz",
    href: "blog4.html",
  },
  {
    id: 5,
    title: "Community Pics",
    date: "07 Sep 2023",
    description:
      "This is a constantly updated collection of articles you can find on this site. Each article stands on its own, as you see familiar concepts in a new light. You learn: - Union types and as types - Value types (or literal types) Symbol in JavaScript and TypeScript # Symbols are a very unique type in JavaScript.",
    img: "https://res.cloudinary.com/daily-now/image/upload/t_logo,f_auto/v1655817725/logos/community",
    href: "blog5.html",
  },
  {
    id: 6,
    title: "Medium",
    date: "02 Sep 2023",
    description:
      "The goal is to apply some kind of modularisation that will make the codebase easier to understand by setting boundaries between features and minimizing code coupling and side effects. By default when scaffolding a new project using one of the popular front-end frameworks the component structure is flat and follows no hierarchy whatsoever.",
    img: "https://res.cloudinary.com/daily-now/image/upload/t_logo,f_auto/v1/logos/medium",
    href: "blog6.html",
  },
];

let blog = "";

data.forEach((d) => {
  blog += `
    <div style="color: aliceblue" class="col-md-4 mt-4 mx-auto">
    <div style="background-color: #1d1f25; border: 1px solid #1f1f25" class="p-3 rounded-3">
      <div class="d-flex">
        <img
          style="height: 40px"
          class="rounded-circle me-3"
          src="${d.img}"
          alt=""
        />
        <div>
          <h6 class="fw-bold">${d.title}</h6>
          <p style="font-size: 14px" class="text-secondary">
            ${d.date}
          </p>
        </div>
      </div>
      <div>
        <h6 class="mb-3">
          ${d.description.slice(0, 150) + "..."}
        </h6>
        <a href="#"> See More </a>
      </div>
    </div>
  </div>
      `;
});

document.getElementById("cardContainer").innerHTML = blog;
