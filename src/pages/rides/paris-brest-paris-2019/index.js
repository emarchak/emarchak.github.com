import React from "react"
import PropTypes from "prop-types"
import {Link} from "gatsby"
import { OutboundLink } from 'gatsby-plugin-google-analytics'

import LayoutArticle from "../../../components/layout-article"
import Instagram from "../../../components/instagram"
import Lang from "../../../components/language"
import SEO from "../../../components/seo"
import Logo from "../../../components/logo"
import styleVariables from '../../../styles/variables'

const {
  colors: {secondary},
  mediaQueries: {sml},
  padding: {basePadding, largePadding}
} = styleVariables

const articleStyle = {
  backgroundColor: secondary,
  padding: `2rem ${largePadding}`,
  marginBottom: `4rem`,
  [sml]: {
    padding: `2rem ${basePadding}`,
  }
}

const Rule = ({number}) => (
  <>(<a href={`#rule${number}`}>Rule {number}</a>)</>
)

Rule.propTypes = {
  number: PropTypes.number,
}

const IndexPage = () => {
  let photoCount = 0;

  function photoType() {
    photoCount++;
    return (photoCount % 2) ? 'right' : 'left'
  }

  return (
    <LayoutArticle pageTitle="Paris-Brest-Paris 2019: Ride Report">
      <SEO title="Bonne route et bon courage, or 5 rules to accomplish the impossible" />
      <article css={articleStyle}>
        <h1><Lang>Bonne route et bon courage</Lang></h1><h2>or, 5 rules to accomplish the impossible</h2>
        <p>To understand any of the following, you’ll have to understand that my vice of choice is gluttony. Gluttony for all things. If it’s a food that I love, I’ll eat until I’m bursting. If it’s a new show I’m enthralled with, I'll binge it until the sun comes up. If it’s a friend that I love, we’ll have vacations where we can’t stand each other’s faces at the end. I overcommit to things.</p>
        <p>I love cycling, and I’ve gotten into ultra-distance style called <OutboundLink href="https://en.wikipedia.org/wiki/Randonneuring"><Lang>Randonneuring</Lang> or <Lang>Audax</Lang></OutboundLink>, the latter derived from French for <Lang>audacious</Lang>. I started riding these 200km+ <Lang>brevets</Lang> four years ago, and this year I finally was able to ride the literal grand-daddy of all <Lang>brevets</Lang>, Paris-Brest-Paris.</p>
        <p><OutboundLink href="https://www.apidura.com/journal/paris-brest-paris-everything-you-need-to-know/">Paris-Brest-Paris</OutboundLink> is the oldest <Lang>grand brevet</Lang>. It goes from Paris to the seaside town of Brest, and back. It was first run in 1891, which was less than 10 years after bicycles stopped being those big-wheeled penny farthings and started becoming the shape we see today – same-sized wheels with pneumatic tires and gears connecting them. Paris-Brest-Paris was originally ran every 10 years, pausing only once for WWII. The event was so popular that the organizers wanted an even bigger ride, and in 1903 they ran the first <Lang>Tour de France</Lang>. In 1931, the first women riders finished the full route. In 1952, it switched to every four years. This August, I was able to ride it.</p>
        
        <p><Lang>Brevets</Lang> are organized rides over 200km. They have controls about every 100km where you must get your control card stamped (like a passport) to prove that you were there. There’s usually food and bike mechanics at controls, plus you can get additional support from friends and family. Outside of these controls, however, you’re on your own. Controls open and close at specific times based on an <a href="http://www.randonneurs.bc.ca/introduction/timerule.html">archaic calculation</a>. If you arrive after a control closes, you’re marked “did not finish” or “scratched,” so you have to keep moving. <Lang>brevets</Lang> have a total time limit to finish, too. This time limit includes sleeping, eating, everything. </p>
      </article>
      <article css={articleStyle}>
        <p>Paris-Brest-Paris is 1200km long, and I had 90 hours to finish. I broke the ride into four days, sleeping three times at the controls where my partner and sister would have my drop bag containing extra equipment and food. My plan was three nights with four hours of sleep each, plus a four hour buffer at the end. I had completed a 1000km <Lang>brevet</Lang> to qualify, so I was confident in handling multi-day rides. I had a plan! <Rule number={1}/> I created a spreadsheet! Nothing could go wrong! </p>
        <Instagram id={'B3Af4OgAPY2'} type={photoType()} />
        <p>I start off with the final wave of riders of the day, with the sun setting behind us. Nerves get to everyone, 200 riders in a tight peloton through the rolling Breton countryside. We snake through small medieval towns in the dark, lit up by the front lamps of the riders in front of me. I make it to the first control at Mortange-au-Perche at 2am, a full 45 minutes ahead of schedule. I immediately load up on water, hot coffee, and fresh baguettes. <Rule number={2} /> </p>
        <p>Following my plan <Rule number={1} />, I leave right on schedule. 30 minutes later, I start to feel my rear tire become softer and softer until I have to pull off the side of the road. I have tubeless tires, so all that’s inside the tire is this goopy sealant that hardens around a puncture. The sealant is leaking out the sidewalls and the tread, as if the tire were porous. After an hour of trial and error, I give up fixing the tire itself and throw in a backup tube I carry with me. <Rule number={3} /></p>
        <p>It holds until morning. I hit the control at Villaines-la-Juhel right as day breaks. I fill myself with a big bowl of <Lang>café au lait</Lang> and <Lang>pain au chocolate</Lang> that was still warm from the oven. By the afternoon, the tire is slowly leaking again. About every two hours, I have to stop and re-pump the tire, which is slowing me down significantly. </p>
        <p>I text my {"partner/\u200bmechanic"} about what’s going on. “Find a new tube,” he suggests. At each of the controls, I visit the mechanic tent and ask for my wheel size “<Lang>Six-cinq-zero B?</Lang>” and each time I hear “<Lang>Six-cinquante B? Non.</Lang>” Small French towns just didn’t have tubes for my 650B mountain bike-sized wheels. Eventually, I give up asking each time, and fate myself to a slower ride. <Rule number={4} /></p>
        <p>I get to my first sleep at Loudéac by midnight, after 38 hours awake, 22 hours of riding, and four hours later than planned. My {"partner/\u200bmechanic/\u200bchef"} grabs my bike and sends me off to bed. I fill my face with the spread of fresh pasta and cakes that he’s set up in the hotel room, set five alarms for two hours from them and immediately pass out. <Rule number={2} /></p>
        <p>I wake up refreshed. Too refreshed. I jump up and look at my phone which was <strong>set to silent</strong>. I’ve slept in by three hours, which gives me only three hours to cover the 70km to the next control at Carhaix before it closes. This would be challenging for me on fresh legs, let alone after 450km with a bum tire. I grab everything I need for the day and ride screaming out the doors of the hotel. I join a peloton of Italian riders that are zipping up the hills. “Strong woman” one of them says to me after a particularly rough climb. Afraid woman, I think.</p>
        <p>I make it to Carhaix, but one hour late. I get my control card signed and expect them to take it away. They don’t. I grab a coffee and a pastry and sit down. I feel strangely relieved as I let my {"partner/\u200bmechanic/\u200bchef/\u200btherapist"} know I’m done, I’ve scratched. With the missed alarm and the continuing tire trouble, I thought I was done. <Rule number={4} /> I commit to riding to Brest and back to Loudéac, so he and my sister, the support car driver, can pick me up the next morning. I’m actually excited for the day I’ll be able to enjoy the ride since I won’t be on the clock. <Rule number={2} /></p>
        <Instagram id={'B3AfF2xgv4b'} type={photoType()} />
        <p>I spend the day climbing through the Arrée mountains to the sea. I see dairy cows lounging in fields, and families by the side of the road, cheering us on. “<Lang>Bon courage! 230km à Brest!</Lang>” is written in chalk on the road as we pass through a small town. I stop outside a farm where they’ve set up a crepe stand an assembly line making crepes and filling them with homemade jam. “<Lang>Gratuit pour cyclistes</Lang>,” the woman smiles as she hands me a blackberry crepe and a cup of coffee, “<Lang>De la ferme</Lang>!” pointing to a large carafe of farm-fresh milk. (I’ll dream of that milk, it was delicious.)</p>
        <p>In Brest, they route us over a bridge that spans the whole bay, opening up until the ocean. It was afternoon when I got there, so there was a warm breeze floating across the bay. At the control I see a bunch of Seattle randonneurs lined up at a craft beer tent. “I ain’t doing this shit sober!” one shouts to laughter. I don’t care anymore that I’m still pumping my tire every two hours, the experience alone is amazing.</p>
        <Instagram id={'B1gGvQIgJjs'} type={photoType()} />
        <p>It’s evening when I return to Carhaix, my last stop before the hotel. I see a friend who won’t finish. He hasn’t slept the whole event and he could no longer ride a straight line. I tell him that I’ll be doing the same, “Do you have your control card? Is it all stamped?” Of course, I kept stamping it at the controls as I visited them, eager to see the different stamps that the towns made for the ride. “They don’t care about the control times, only your total 90 hours. Girl, you’re well rested, you can finish this!” <Rule number={2} /> <Rule number={4} /> I tell him that I’ll I need to sleep on it. <Rule number={5} /> </p>
        <p>I return to my bike to find the rear tire totally deflated, I try to pump it up again and nothing is holding. The tube is totally kaput, I won’t even make it to the hotel with it. I take it to the bike mechanic tent, where I see the mechanic lounging on a full-suspension mountain bike. “<Lang>Six-cinq-zero B?</Lang>” I ask, hesitantly. “<Lang>Six-cinquante B? Oui oui, dix minutes</Lang>.” he says as he peels off. He’s back with 650B tubes and installs one for me, charging me nothing, and handing me a second as backup. <Rule number={3} /> I throw down 20€ for him, and shout “<Lang>Pour la bière</Lang>!” before I hit the road.</p>
        <p>I’m flying. I can finally feel the bike push against me as I push down, I’m finally getting the full power of my pedal stroke. It’s dark, but I don’t care. I meet a rider from New Jersey and we create a good pace line while joking with each other. I get to my hotel at the control in the dark hours right before dawn, set my alarm for one hour from then <strong>turning on the phone’s ringer</strong>. I wake up to the alarm, on time and excited. I throw everything into my drop bag which I left in the storage room, and check out of the hotel. I text my {"partner/\u200bmechanic/\u200bchef/\u200btherapist"} “Checked out of the hotel, pick up the bag pls. Only the 90h matter.”</p>
        <p>The sun cracks the sky as I ride through the control. “<Lang>Control?</Lang>” A volunteer shouts at me, “No! <Lang>Paris</Lang>!” I shout back as I fly by onwards and they cheer for me. As I ride, I do the math in my head for the remaining parts of the ride. I’ve burnt all my sleep and buffer time, but I have 31 hours to cover 400km, which I’ve done before. If I can make it through the final night without sleep, I could totally pull this off. <Rule number={1} /></p>
        <p>I’m now riding with the riders that started in the 84 hour time limit, who started 12 hours after me. They’re efficient and experienced. I can grab onto a peloton as it zips past me and hold on with them as we crack 35km/h for good stretches as the road straightens out. We leave the mountains and hit the rolling hills by the time the sun goes down at kilometre 1,012. I know this next stretch will be the hardest. I’ve never biked longer than 1,000km before and it’ll be through the night. </p>
        <Instagram id={'B1gqyL0AFIf'} type={photoType()} />
        <p>I can see riders alongside the road taking “ditch naps,” sleeping covered in shiny emergency blankets as the temperatures dip down. I make it a third of the way to the next control before I’m weaving around the road, too tired to focus. I pull off to the side and look back. It’s breathtaking. It’s pitch black, but as far back as I can see the flickers of white headlamps snaking through the rolling hills. There are hundreds of cyclists behind me, trying to ride through the night just as I am. I keep rolling.</p>
        <p>Eventually, I do need to join the ditch nap crew. I set my alarm for 10 minutes, and try to calm myself down. The moment I close my eyes, I feel like the alarm goes off. I open my eyes and look up. The stars are so bright, and the constellations look so different from the Canadian sky I’m used too. The line of front lights is still snaking along the hills, so I hop back on. I see a minivan pulled off to the side of the road, with a table set up where three men are handing out styrofoam cups of hot coffee to riders. I grab one, and chug it. While I’m there, they pack up the van and move away. I get back on my bike, and after another 20km of riding I see them set up again. We hopscotch each other until morning.</p>
        <p>I make it to the second last control before morning, absolutely exhausted. It’s a school, with the gym filled with riders eating and napping. I set an alarm for another 20 minutes, and lay my head down at a table. Those minutes go by too quickly, and I wake up more tired than before. I don’t grab any food, but two cans of coca-cola and set back on the road. </p>
        <p>Dawn is coming, and lack of sleep is starting to weigh heavily on me. The sugar isn’t doing anything as I climb out of the valley. I need real food. I chug both cans before I get to the top, finally stopping by the side of the road for another 10 minute nap. I wake up, exhausted to the core. I can’t do it. I text my {"partner/\u200bmechanic/\u200bchef/\u200btherapist/\u200bcoach"} “I’m too sleepy for my 90 hours. Could you pick me up on the route?” He replies, “I think you should try to finish. You’ll feel a million times better tomorrow if you go to the end or at least as hard as you can.” <Rule number={4} /> He’s right, I’ve come so far and I’m so close. Even if I can’t make the time, I’ll make it to the end. I have yet another 10 minute nap before I keep climbing.</p>
        <p>At the end of the climb, there’s a small town that’s just waking up. Cyclists are sitting outside at the small tables shared by a cafe and bakery. I accept that I can’t go any further in my current state, so I grab a double espresso and two baguettes before I settle in to watch riders go by. I share a table with an Italian rider. We try to joke about how tired we are, but neither of us understand the other. After digesting, I was finally feeling like I can get back on the route. <Rule number={5} /> I text my {"partner/\u200bmechanic/\u200bchef/\u200btherapist/\u200bcoach/\u200bGPS"}, “I’ll be able to make it to the end. I have about 110km left, I think.” which would have me finish one hour over my time limit, but at least finished. “It looks closer to 90km.” he replies, “<Lang>Allez allez!</Lang>”</p>
        <Instagram id={'B1VjTO-gewq'} type={photoType()} />
        <p>That 20km was all the difference. At this point, I’m back in the game. <Rule number={4} /> The hills go from rolling to flat, and I latch onto a peloton headed by Canadian randonneurs. I go from a crawling 12km/h before the cafe, back up to 30km/h. I stop at each cafe or roadside tent to grab a snack and espresso. I’m not letting hunger drag me back down again. </p>
        <p>In the last stretch, I chase down every single rider I see. There is no point to holding back or limiting myself, this was it. A giant Brazilian rider with aero bars creates a pace line with me for 20km before I drop him. Two Russians on carbon fibre bikes ride with me for a bit. “Slow wheels?” they ask pointing to my big 650B tires. “No. Comfortable. They keep rolling.” I reply as I sprint up a hill past them. The kilometres tick by as the sun moves across the sky to a mid-afternoon glow. My playlist shuffles to a song called <a href="https://joeypecoraro.bandcamp.com/track/music-for-happiness">Music for Happiness</a>.</p>
        <p>I cross the finish line almost a full hour before my time limit, my {"partner/\u200bmechanic/\u200bchef/\u200btherapist/\u200bcoach/\u200bcheerleader"} and my family not yet in place by the finish line. I have to slow down because the final control has become more of a festival at this point. Riders loiter about, cheering for others as they roll in. I get my control card stamped, finally filling in all the little squares like a well-used passport. My family are all wearing matching t-shirts that say “Team Erin. PBP 2019”. My dad forgot the champagne, but they hand me a baguette as a replacement. I couldn’t be happier.</p>
        <p>… </p>
        <p>It’s (obviously) hard to summarize an experience like this into something easily digestible. The whole ride seems at once both bigger than anything I could describe, and filled with so many small experiences I could never share them all. The journey was far, far better than the destination and I was able to prove to myself that I could do things greater than I could imagine. </p>
        <p>We often limit ourselves with words like “can’t” or “never”, especially when faced with things we haven’t done before. Instead, ask yourself “What needs to happen for you to accomplish the impossible?” “What needs to change to get it from impossible to possible?” And of course, “Can I change it?”</p>
      </article>
      <article css={articleStyle}>
        <h2>5 Rules to Accomplish the Impossible</h2>
        <dl>
          <dt id={'rule1'}><h3>1. Break it down with a plan.</h3></dt>
          <dd><p>Assume that it’s possible, and then step backwards slowly. Instead of one impossible goal, you can make it into a few hard goals, and those into several achievable goals. And then start picking them off, one by one. If you miss one, just adjust the plan.</p></dd>
          
          <dt id={'rule2'}><h3>2. Use downtime when it’s given to you.</h3></dt>
          <dd><p>If you’re pushing yourself hard, you’ll eventually hit a wall. You should plan for that wall, but if you find yourself with unexpected downtime, take it. Rest, eat, reduce tech debt, whatever. You might not get downtime again.</p></dd>

          <dt id={'rule3'}><h3>3. Always have a backup.</h3></dt>
          <dd>
            <p>Things change and you’ll frequently have to deal with the unexpected. You can accommodate a lot of change without losing much progress if you have backups.</p>
            <p>If you're using your backup, it’s now the primary. Find a new backup, or already have one in the plan. </p>
          </dd>
          
          <dt id={'rule4'}><h3>4. Don’t give up on yourself.</h3></dt>
          <dd><p>No one will ever be able to get in your head like you can. We tend to give up on ourselves before we hit any real barriers. Losing patience with yourself when you’re learning something new, for example. Trust in yourself, breathe, and take the time you need.</p></dd>
          
          <dt id={'rule5'}><h3>5. Make no irreversible decisions while hungry or tired.</h3></dt>
          <dd><p>Baguettes rule.</p></dd>
        </dl>
        <Instagram id={'B1ndEFTAEz5'} />
      </article>
      
        <Link to="/" css={{textAlign: `center`, display: `block`, border: `none`}}><Logo/></Link>
      
      
    </LayoutArticle>
  )
}


export default IndexPage
