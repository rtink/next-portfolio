import Layout from "../components/Layout";
import { withRouter } from "next/router";

const Post = ({ router }) => (
  <Layout title={router.query.title}>
    <p style={{ width: "80vw" }}>
    Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. 
    De carne lumbering animata corpora quaeritis. Summus brains sit​​, 
    morbo vel maleficia? De apocalypsi gorger omero undead survivor dictum mauris. 
    Hi mindless mortuis soulless creaturas, imo evil stalking monstra adventus 
    resi dentevil vultus comedat cerebella viventium. Qui animated corpse, 
    cricket bat max brucks terribilem incessu zomby. The voodoo sacerdos flesh eater, 
    suscitat mortuos comedere carnem virus. Zonbi tattered for solum oculi eorum 
    defunctis go lum cerebro. Nescio brains an Undead zombies. Sicut malus putrid 
    </p>
  </Layout>
);

export default withRouter(Post);
