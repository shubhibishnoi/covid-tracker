console.log("js file is up");

let newsAccordion = document.getElementById('newsAccordion');

let tokenKey = "089a0644c7c665c6adbcbd72ddaa51c3"

const xhr = new XMLHttpRequest();
xhr.open('GET', `https://gnews.io/api/v4/search?q=Covid&token=089a0644c7c665c6adbcbd72ddaa51c3&lang=en&max=6`, true);
xhr.onload = function () {
    if (this.status === 200) {
        let json = JSON.parse(this.responseText);
        let articles = json.articles;
        console.log(articles);
        let newsHtml = "";
        articles.forEach(function(element) {
            // console.log(element, index)
            let news = `
                        <li class="wow fadeInDown">
                        <figure class="featured_img"><img src="${element['image']}" alt=""></figure>
                        <article class="featured_article">
                          <h2 class="article_titile"><a href="${element['url']}" target="_blank"> ${element["title"]} </a></h2>
                          <p>${element["description"]} <a href="${element['url']}" target ="_blank">click to read more</a></p>
                        </article>
                      </li>
                      `;
            newsHtml += news;
            
        });
        newsAccordion.innerHTML = newsHtml;
    }
    else {
        console.log("Some error occured")
    }
}

xhr.send();
