console.log("Hi! ^_^")

  const deleteLink = document.getElementById("dalink2")

  deleteLink.addEventListener("click", function (event) {
    event.preventDefault(); 
    Swal.fire({
      title: "This link will take you to a different link",
      text: "Press Yes to open the page",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes",
      cancelButtonText: "No",
      customClass: {
        popup: "mypopup"
      }
    }).then((result) => {
      if (result.isConfirmed) {
        // Navigate to another page (example.com here)
        window.location.href = "https://cubeythemonitor.github.io/CubeyLinkTree";
      }
    });
  });



    const toggleBtn = document.getElementById("disablecss");
    let cssDisabled = false;

    toggleBtn.addEventListener('click', () => {
      document.querySelectorAll('link[rel="stylesheet"]').forEach(link => {
        link.disabled = !cssDisabled;
      });

      cssDisabled = !cssDisabled;
      toggleBtn.textContent = cssDisabled ? 'Enable CSS' : 'Disable CSS';
    });
