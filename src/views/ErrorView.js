export const ErrorView = () => {
    const containerError = document.createElement("div");
    containerError.classList.add("containerError");
    containerError.innerHTML = `
    <div class="contentMessage">
    <h1 class="titleError">Error 404</h1>
    <h2 class="subtitleError">¡Oh, no!</h2>
    <p class="textMessage">Nuestros ingenieros están trabajando en la pista digital para resolver cualquier problema técnico.</p>
    <p class="textMessage">¡Mientras tanto, mantén la calma en el pit y espera a que el semáforo digital te dé luz verde de nuevo!</p>
    <button class="errorButton">Volver a la carrera</button>
    </div>
    `;

    return containerError;
  };