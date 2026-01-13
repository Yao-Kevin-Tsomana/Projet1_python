document.getElementById("btn").onclick = async () => {
  const res = await fetch("http://127.0.0.1:5000/api/hello");
  const data = await res.json();
  document.getElementById("result").textContent = data.message;
};
