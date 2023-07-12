
import "../../src/styles/blogs.scss";

const Blogs = () => {

  const dummyPara = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
  when an unknown printer took a galley of type and scrambled it to make a type 
  specimen book. It has survived not only five centuries, but also the leap into 
  electronic typesetting, remaining essentially unchanged.`


  const data = [
    {
      title : "Assassin's Creed Mirage",
      img : "https://www.gameshub.com/wp-content/uploads/sites/5/2022/09/assassins-creed-mirage-key-art.jpg?w=1024",
      tags : ['Ubisoft', 'Video game'],
    },
    {
      title : 'Spider-Man: Across the Spider-Verse',
      img : "https://4kwallpapers.com/images/wallpapers/spider-man-across-2560x1440-11590.jpg",
      tags : ['Sony', 'Miles Morales'],
    },
    {
      title : 'Puss in Boots: The Last Wish',
      img : "https://images4.alphacoders.com/129/1297183.jpg",
      tags : ['DreamWorks', 'Animated'],
    }
  ]

  const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];

  let dateAll = new Date();
  let date = dateAll.getDate();
  let month = months[dateAll.getMonth()]
  let year = dateAll.getFullYear();

  return (
    <div >
      <div id="blogs_top_div">
        <h2>Blog posts</h2>
        <button>
          <svg xmlns="http://www.w3.org/2000/svg" 
          width="16px" height="16px" viewBox="0 0 24 24">
          <path fill="currentColor" d="m19.3 8.925l-4.25-4.2l1.4-1.4q.575-.575 1.413-.575t1.412.575l1.4 1.4q.575.575.6 1.388t-.55 1.387L19.3 8.925ZM4 21q-.425 0-.713-.288T3 20v-2.825q0-.2.075-.388t.225-.337l10.3-10.3l4.25 4.25l-10.3 10.3q-.15.15-.337.225T6.825 21H4Z">
          </path></svg>
          Write
        </button>
      </div>
      
      <div id="blogs_container">
        {data.map((each,i) => (
        <div key={i} className="blog_card" >
          <img src={each.img}/>

          <div className="title_tags" > 
              <p className='tags'>
                {each.tags.map((val,j)=>(
                  <span key={j} className='each_tag'>
                    {val}
                  </span>
                ))}
              </p>
              <p className='title'>
                {each.title}
              </p>
              <p className='para '>
                {dummyPara}
              </p>
          </div>

          <div className='name_date_icon'>
              <div className='name_date'>
              <p className="circle">
                  S
              </p>
              <p className="date">
                {month} {date} {year}
              </p>
              </div>
              <svg xmlns="http://www.w3.org/2000/svg" 
              width="22px" height="24px" 
              viewBox="0 0 32 32">
                <path fill="currentColor" 
                d="M24 16v10.752l-7.096-3.59l-.904-.457l-.9.456L8 26.748V4h10V2H8a2 2 0 0 0-2 2v26l10-5.054L26 30V16Z"></path><path fill="currentColor" d="M26 6V2h-2v4h-4v2h4v4h2V8h4V6h-4z">
              </path></svg>
          </div>
        </div>
        ))}
      </div >
    </div>
  )
}

export default Blogs