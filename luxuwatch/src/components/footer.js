import "../components/footer.css"

export default function Footer () {
    return(
       <footer class="footer">
        <h2 class="early">LuxuWatch</h2>
        <div>
        <p class="early">Get early acces to new product releases, Join now</p>
        <input type="email" class="early" placeholder="Someone@Example.com" required/> 
        <input type="submit" class="early" value="Join Now" />
        </div>
        
        <h3 class="info1">Services</h3>
    <a class="info1" href="#">About us</a>
    <a class="info1" href="#">FAQ</a>
    <a class="info1" href="#">Returns & Exchanges</a>
    <a class="info1" href="#">Shiping & Policy</a>
    <a class="info1" href="#">Contact</a>
    <br/>
        <p class="reserved">© 2023 LuxuWatch | All right reserved</p>
    </footer>
        
    )
}