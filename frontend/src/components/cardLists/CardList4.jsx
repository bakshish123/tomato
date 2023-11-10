import React from 'react'
import Card4 from '../cards/Card4'

const CardList4 = () => {
    const arr = [
        {
            title:'Popular cuisines near me',
            list:'Bakery food near me,Beverages food near me,Biryani food near me,Burger food near me,Chinese food near me,Coffee food near me,Continental food near me,Desserts food near me,Italian food near me,Mithai food near me,Momos food near me,Mughlai food near me,North Indian food near me,Pasta food near me,Pizza food near me,Rolls food near me,Sandwich food near me,Shake food near me,South Indian food near me,Street food near me'
        },
        {
            title:'Popular restaurant types near me',
            list:'Bakeries near me,Bars near me,Beverage Shops near me,Bhojanalya near me,Cafés near me,Casual Dining near me,Clubs near me,Cocktail Bars near me,Confectioneries near me,Dessert Parlors near me,Dhabas near me,Fine Dining near me,Food Courts near me'
        },
        {
            title:'Top Restaurant Chains',
            list:'Bikanervala ,Biryani Blues, BTW, Burger King ,Burger Singh ,Domino ,Dunkin Donuts ,Haldiram s ,KFC ,Krispy Kreme ,McDonald s ,Moti Mahal Delux ,Om Sweets & Snacks ,Pizza Hut ,Sagar Ratna'
        },
        {
            title:'Cities We Deliver To',
            list:'Delhi NCR ,Kolkata, Mumbai, Bengaluru, Pune, Hyderabad, Chennai, Lucknow, Kochi, Jaipur, Ahmedabad, Chandigarh, Goa, Indore, Gangtok'
        }
    ]
  return (
    <div>
    {arr.map((card,index)=>(
        <Card4 key={index} {...card}/>
    ))}
    </div>
  )
}

export default CardList4