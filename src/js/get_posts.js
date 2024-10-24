const loadMoreBtn = document.getElementById('load-more');
  const span = document.querySelector('.cards__load-more-span');
  const postsContainer = document.querySelector('.cards__wrapper');
  let postCount = 10;
  
  loadMoreBtn.addEventListener('click', fetchPosts);
  
  function fetchPosts() {
    toggleLoading(true);
  
    fetch(`https://jsonplaceholder.typicode.com/posts?_limit=5&_start=${postCount}`)
      .then(response => response.json())
      .then(posts => {
        posts.forEach(({ title, body }) => {
          postsContainer.innerHTML += `
            <article class="cards__card card">
              <div class="card__image-wrapper">
                <img src="./img/card-img-1.webp" alt="Coins" class="card__image" />
              </div>
              <div class="card__content">
                <h3 class="card__category">BRIDGE</h3>
                <p class="card__title">${title}</p>
                <p class="card__description">${body}</p>
                <p class="card__date">Posted by <span>Eugenia</span> on July 24, 2019</p>
                <button class="card__button button button--fill">Continue reading</button>
              </div>
            </article>`;
        });
        postCount += 5;
        if (postCount >= 30) loadMoreBtn.style.display = 'none';
      })
      .catch(console.error)
      .finally(() => toggleLoading(false));
  }
  
  function toggleLoading(isLoading) {
    span.textContent = isLoading ? '' : 'Загрузить еще';
    span.classList.toggle('spinner', isLoading);
  }
