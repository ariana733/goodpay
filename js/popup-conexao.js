const toastLiveExample = document.getElementById('liveToast')


addEventListener('offline', () => {
    const toast = new bootstrap.Toast(toastLiveExample)
    toast.show()
});

addEventListener('online', () => {
    const toast = new bootstrap.Toast(toastLiveExample)
    toast.hide()
});
