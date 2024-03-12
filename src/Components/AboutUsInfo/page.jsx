import styles from "@/Components/AboutUsInfo/AboutUsInfo.module.css"
import Project from "@/Components/AboutUsInfo/index"
// import craft1_img from "@/images/craft1.png";
// import craft2_img from "@/images/craft2.png";
// import craft3_img from "@/images/craft3.png";
// import craft4_img from "@/images/craft4.png";
// import craft5_img from "@/images/craft5.png";
import img1 from "@/medias/mambo_mambo.jpeg"
import img2 from "@/medias/jomor_design.jpeg"
import img3 from "@/medias/la_grange.jpeg"
import img4 from "@/medias/deux_huit_huit.jpeg"
import img5 from "@/medias/nothing_design_studio.png"
export default function Home() {


  const projects = [
    {
      title1: "Crafting dreamy Interiors",
      title2: "",
      // src: "AboutUs_hoverImage1.png"
      src: img1
    },
    {
      title1: "that speak volumes,",
      title2: "merging style",
      // src: "AboutUs_hoverImage2.png"
      src: img2
    },
    {
      title1: "",
      title2: "with soul to redefine your",
      // src: "AboutUs_hoverImage3.png"
      src: img3
    },
    {
      title1: "living experience.",
      title2: "Elevate your",
      // src: "AboutUs_hoverImage4.png"
      src: img4
    },
    {
      title1: "",
      title2: "space with us!",
      // src: "AboutUs_hoverImage5.png"
      src: img5
    }
  ]

  return (
    <main className={styles.main}>
      <div className={styles.gallery}>
        {/* <p>Featured Work</p> */}
          {
            projects.map( project => {
              return <Project project={project}/>
            })
          }
      </div>
    </main>
  )
}
