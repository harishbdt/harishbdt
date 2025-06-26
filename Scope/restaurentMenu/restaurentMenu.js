const breakfastMenu = ['Pancakes- $12', 'Egg Benedict- $23', 'Oatmeal- $22', 'Frittata- $15'];
const maincourseMenu = ['Steak- $29', 'Pasta- $35', 'Burger- $30','Salmon- $45'];
const dessertMenu = ['cake- $11', 'Ice Cream- $15', 'Pudding- $18', 'Fruit Salad- $25'];

const breakfastMenuItemsHTML = breakfastMenu.map((item, index) => `<p>Item ${index + 1}: ${item}</p>`).join('');
        document.getElementById('breakfastMenuItems').innerHTML = breakfastMenuItemsHTML;

        let maincourseItem = '';
        maincourseMenu.forEach((item, index) => {
        maincourseItem += `<p>Item ${index + 1}: ${item}</p>`;});
        document.getElementById('maincourseMenuItems').innerHTML = maincourseItem;

let dessertItem = '';
for (let i=0; i < dessertMenu.length; i++) {
    dessertItem += `<p>Item ${i+1}: ${dessertMenu[i]}</p>`;}
    document.getElementById('dessertMenuItems').innerHTML = dessertItem;


