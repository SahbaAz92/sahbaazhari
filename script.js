document.querySelectorAll('.expertise-a').forEach(button => {
  button.addEventListener('click', () => {
    // Remove active class from all buttons
    document.querySelectorAll('.expertise-a').forEach(btn => btn.classList.remove('active'));

    // Hide all content items
    document.querySelectorAll('.showcase-content-item').forEach(item => item.classList.remove('active'));

    // Add active class to the clicked button
    button.classList.add('active');

    // Show the content item corresponding to the clicked button
    const targetId = button.getAttribute('data-target');
    document.getElementById(targetId).classList.add('active');
  });
});
