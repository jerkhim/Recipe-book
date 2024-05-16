import { Component } from '@angular/core';



@Component({ templateUrl: 'details.component.html' })
export class DetailsComponent {

    msg: string;
    msg1: string;
    msg2: string;
    msg3: string;
    msg4: string;
    msg5: string;
    isMessageVisible: boolean;

    constructor() {}
    
    //Egg Sandwich
    clickEvent1() {
        if (this.isMessageVisible) {
          this.msg = ""; // Clear message if it's currently visible
        } else {
          this.msg = "This classic breakfast favorite combines fluffy eggs with toasted bread for a satisfying start to the day. With just a few simple ingredients, you can whip up this delicious sandwich in no time.";
        }
        this.isMessageVisible = !this.isMessageVisible; // Toggle the message visibility
      }

      //Pure Vegetable Bowl
    clickEvent2() {
        if (this.isMessageVisible) {
            this.msg1 = ""; // Clear message if it's currently visible
          } else {
            this.msg1 = "This wholesome dish features a medley of fresh vegetables, grains, and a flavorful dressing, offering a nourishing and satisfying dining experience. Quick and easy to prepare, this vegetable bowl is perfect for a light lunch or dinner that's as nutritious as it is delicious.";
          }
          this.isMessageVisible = !this.isMessageVisible; // Toggle the message visibility
        }

        //Egg Masala Ramen
      clickEvent3() {
        if (this.isMessageVisible) {
            this.msg2 = ""; // Clear message if it's currently visible
          } else {
            this.msg2 = "Elevate your ramen game with this flavorful twist featuring egg masala. This fusion dish combines the comfort of ramen noodles with the rich and aromatic spices of masala, creating a satisfying meal bursting with savory goodness. Perfect for a quick and delicious lunch or dinner, this Egg Masala Ramen is sure to tantalize your taste buds and leave you craving more.";
          }
          this.isMessageVisible = !this.isMessageVisible; // Toggle the message visibility
        }

        //Egg Manchurian
      clickEvent4() {
        if (this.isMessageVisible) {
            this.msg3 = ""; // Clear message if it's currently visible
          } else {
            this.msg3 = "Indulge in the exotic flavors of Indo-Chinese cuisine with Egg Manchurian. This delectable dish features boiled eggs coated in a tangy and spicy Manchurian sauce, creating a harmonious blend of flavors that will tantalize your taste buds. Whether served as an appetizer or as a main course with steamed rice or noodles, Egg Manchurian is sure to be a crowd-pleaser, offering a delightful culinary experience that combines the best of both worlds.";
          }
          this.isMessageVisible = !this.isMessageVisible; // Toggle the message visibility
        }

        //Spanish Egg Bowl
      clickEvent5() {
        if (this.isMessageVisible) {
            this.msg4 = ""; // Clear message if it's currently visible
          } else {
            this.msg4 = "Embark on a culinary journey to Spain with this delightful Spanish Egg Bowl. Inspired by the vibrant flavors of Spanish cuisine, this dish features perfectly cooked eggs nestled on a bed of savory ingredients such as chorizo, roasted peppers, potatoes, and onions. Topped with a sprinkle of fresh herbs and a drizzle of tangy salsa or creamy aioli, this flavorful bowl offers a taste of the Mediterranean that's both comforting and satisfying.";
          }
          this.isMessageVisible = !this.isMessageVisible; // Toggle the message visibility
        }
      
        //Egg Bowl salad
      clickEvent6() {
        if (this.isMessageVisible) {
            this.msg5 = ""; // Clear message if it's currently visible
          } else {
            this.msg5 = "Revitalize your mealtime with a nutritious and satisfying Egg Bowl Salad. This vibrant salad combines the wholesome goodness of fresh greens with the protein-packed goodness of eggs, creating a delightful balance of flavors and textures. Topped with an array of colorful vegetables, creamy avocado slices, and a zesty dressing of your choice, this Egg Bowl Salad offers a refreshing and energizing dining experience.";
          }
          this.isMessageVisible = !this.isMessageVisible; // Toggle the message visibility
        }
}
    

