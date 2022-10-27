export const Footer = () => {
   return (
     <section
       className="bg-trusty-blue text-center py-8 text-white text-lg footer"
       id="footer"
       data-testid="html-element"
     >
       <p>
         Made with 💖 by
         <a
           href="https://www.github.com/nnekasandra"
           target={"_blank"}
           rel={"noreferrer"}
         >
           &nbsp;Nneka
         </a>
         &nbsp;for&nbsp;
         <a href="https://www.outreachy.org/apply/project-selection/#wikimedia">
           Outreachy Internship
         </a>
       </p>
     </section>
   );
}
