document.getElementById('apply-bg').addEventListener('click',function(){
    const friends = document.getElementsByClassName('friend');
    for (const friend of friends){
        friend.style.backgroundColor = "red";
    }
});
document.getElementById('center-third').addEventListener('click',function(){
    const third=  document.getElementById('third-friend');
    third.style.textAlign = 'center';
});
document.getElementById('add-friend').addEventListener('click',function(){
    const friendContainer = document.getElementById('friends');
    const friend = document.createElement('div');
    friend.classList.add('friend');
    friend.innerHTML = `
    <h3 class="friend-name">New friend</h3>
    <p>Voluptatem ad dolor optio aperiam.</p>
    `
    friendContainer.appendChild(friend);
});