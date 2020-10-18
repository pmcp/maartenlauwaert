---
title: 'Velotheek: A Bike Renting Platform For Schools'
cards:
  - provelo
  - provelo2
toc:
- name: The Brief
  id: the-brief 
- name: 'Step 1: Research'
  id: step-1-research

- name: 'Step 2: Decision Tree'
  id: step-2-decision-tree

- name: 'Step 3: Wireframing'
  id: step-3-wireframing

- name: 'Step 4: Click Prototype'
  id: step-4-click-prototype

- name: 'Step 5: MVP'
  id: step-5-mvp

- name: 'Step 6: Live Beta'
  id: step-6-live-beta

- name: 'Step 7 : Learnings'
  id: step-7-and-beyond-analyse--lessons-learned
---

<!-- Components :: START -->
import cardInline from '~/components/cardInline.vue'
import imageInline from '~/components/imageInline.vue'
import articleMeta from '~/components/articleMeta.vue'
import articleGrid from '~/components/articleGrid.vue'
<!-- Components :: END -->

<!-- Content :: START -->
<article-grid :start="2" :end="10">

## The brief

When taking their students on excursion, the primary and secondary schools in the city of Brussels regularly have a shortage of bikes. This makes organizing an outing cumbersome. Not all city kids have bikes, because they are too expensive, or because they get stolen too often, etc. 

<card-inline :id="0">Pro Velo</card-inline>, an organization who promotes biking in the city arranged a container full of bikes to be made available for the schools of Saint-Gilles, one of the communes of Brussels. At the same time, another commune also had the same problems, and a comparable solution. Teachers could reserve bikes for one or more days, pick them up, and return them themselves. They called it "Velotheek" (which translates to "bike library").

But both communes realized quickly that the reservations of the bikes would become complicated and time consuming for the people in charge. So they turned to me to come up with a more streamlined process.

## Step 1: Research
</article-grid>
<article-grid :start="1" :end="11" :prose="false">
<image-inline>
    <g-image
      slot="image"
      class="w-auto"
      src="~/images/velotheek/velotheek_excalidraw_step1.png"
      alt="An scheme showing the timeline of the project. Highlighted is step 1: Research"
    />  
</image-inline>
</article-grid>

<article-grid :start="2" :end="10">
<article-meta>
  <span slot="name">Duration</span>
  <span slot="content">2 weeks</span>
</article-meta>

<article-meta>
  <span slot="name">Tools</span>
  <span slot="content">user talks, personas, desk research</span>
</article-meta>

I visited both Velotheek locations, and talked with all the people involved. Although the premise is comparable at the different communes, there were a lot of differences in the booking flow. The two biggest differences were:

- At Velotheek 1, a padlock opened the door of the Velotheek, and could be opened by anyone who had the access code. At Velotheek 2, they used a key, so the user had to check in with someone from the organisation to open up the Velotheek.

- In Velotheek 1, you could only book bikes for one day, not multiple days. At Velotheek 2, multiple days were possible, but not more than 10.

These two differences seemed to have a big impact on the flow of the application, and how the user would interact with it. To map out all the different user flows, I started working on persona’s and corresponding jobs to be done.<
After the research I defined these persona's:
- The teacher
- The responsible for administration in the school
- The Bike Fixer (someone of Pro Velo)
T- he Administrator (someone of the commune)

Every "persona" gets it's own "jobs to be done", mapping of needs and potential risks involved. From that list I defined what jobs we needed to tackle in the first iteration of the project. In this phase I also performed desk research, looking into existing applications, or comparable sharing platforms.


## Step 2: Decision Tree
</article-grid>
<article-grid :start="1" :end="11" :prose="false">
<image-inline >
    <g-image
      slot="image"
      class="w-auto"
      src="~/images/velotheek/velotheek_excalidraw_step2.png"
      alt="A scheme showing the timeline of the project. Highlighted is step 1: Research"
    />
</image-inline>
</article-grid >
<article-grid :start="2" :end="7">
<article-meta>
  <span slot="name">Duration</span>
  <span slot="content">1 weeks</span>
</article-meta>

<article-meta>
  <span slot="name">Tools</span>
  <span slot="content">Figma</span>
</article-meta>

I don't actually know what this exercise is called, but either way, it's a very helpful one. I map out all the steps a user needs to take to get the job done. Every screen has three sections:

1. The module: This is not really necessary, but already sets up how I will think about the app when I start coding. It helps to build the app in my mind palace.
2. The view: What the user will see.
3. The actions: What the user can do on this page.

This very low fidelity prototype gets shared with the the smallest group of stakeholders (in this case just the product owners and one teacher). It's not a real usability test, but will quickly uncover missing basic features or steps in the flow.
</article-grid>

<article-grid :start="7" :end="11">
<image-inline>
    <g-image
      slot="image"
      class="w-auto"
      src="~/images/velotheek/velotheek2.gif"
      alt="An animated image of an early prototype flow of the application"
    />  
    <span slot="caption">Step 1: Research</span>
</image-inline>
</article-grid>
<article-grid :prose="false" :span="10">

<br>
<image-inline>
    <g-image
      slot="image"
      class="w-auto"
      src="~/images/velotheek/velotheek4.png"
      alt="A screenshot of the application: Figma, showing the low fidelity prototype."
    />  
    <span slot="caption">The overview of all "decision branches"</span>
</image-inline>
<br>
</article-grid>


<article-grid :start="2" :end="10">

## Step 3: Wireframing

</article-grid>
<article-grid :start="1" :end="11" :prose="false">
<image-inline>
    <g-image
      slot="image"
      class="w-auto"
      src="~/images/velotheek/velotheek_excalidraw_step3.png"
      alt="An scheme showing the timeline of the project. Highlighted is step 3: Wireframing"
    />  
</image-inline>
</article-grid>
<article-grid :start="2" :end="10">
<article-meta>
  <span slot="name">Duration</span>
  <span slot="content">2 weeks</span>
</article-meta>

<article-meta>
  <span slot="name">Tools</span>
  <span slot="content">Figma</span>
</article-meta>

Based on the decision tree, I created a wireframe. I always choose a basic design to start with, so the wireframe has some identity to it. This probably goes against some wireframing rules, but I like to give the project immediately  a certain vibe, it makes it more fun to play with. The trick is to not get lost in design. To overcome this, I always use the same design system, and limit my "playing around" to mainly the colors.

</article-grid>
<article-grid :start="1" :end="11" :prose="false">

<image-inline>
    <g-image
      slot="image"
      class="w-auto"
      src="~/images/velotheek/velotheek3.png"
      alt="First wireframes made in Figma."
    />
    <span slot="caption">First wireframes made in Figma.</span>
</image-inline>
</article-grid>
<article-grid :start="2" :end="10">

## Step 4: Click Prototype
</article-grid>
<article-grid :start="1" :end="11" :prose="false">
<image-inline>
    <g-image
      slot="image"
      class="w-auto"
      src="~/images/velotheek/velotheek_excalidraw_step4.png"
      alt="An scheme showing the timeline of the project. Highlighted is step 4: Click Prototype"
    />  
</image-inline>
         
</article-grid>
<article-grid :start="2" :end="10">
<article-meta>
  <span slot="name">Duration</span>
  <span slot="content">2 weeks</span>
</article-meta>

<article-meta>
  <span slot="name">Tools</span>
  <span slot="content">Marvel</span>
</article-meta>

The wireframes get exported to Marvel, a tool specifically for creating click prototypes. It's a bit more robust than the prototyping function of Figma, and makes it easier to share the prototype with a group of users. You could also design the wireframes in Marvel, but I prefer doing this in Figma, so I can keep some continuity in my design files.

Once all the clicks and paths are in place, the app gets send to some users. In this case I've send it to some teachers that were contacted by the commune. It's very valuable to do this in person, as it's easier to catch what the user is doing, but a video call also works. Marvel has been expanding on their remote testing features, so check those out if you plan on doing a remote user session. The lessons I learn during these talks will help me iterate on the wireframes.

## Step 5: MVP
</article-grid>
<article-grid :start="1" :end="11" :prose="false">
<image-inline>
    <g-image
      slot="image"
      class="w-auto"
      src="~/images/velotheek/velotheek_excalidraw_step5.png"
      alt="An scheme showing the timeline of the project. Highlighted is step 5: MVP"
    />  
</image-inline>
</article-grid>
<article-grid :start="2" :end="10">
<article-meta>
  <span slot="name">Duration</span>
  <span slot="content">6 months (2 months of building, 4 months of testing)</span>
</article-meta>

<article-meta>
  <span slot="name">Tools</span>
  <span slot="content">VueJS, Vuetify, Firebase, Analytics</span>
</article-meta>

Once I have a decent wireframed app, and covered as much as essential use cases, it's time to get the tool in the hands of users. I defined some clear jobs to be done, and develop just enough to accommodate these user flows.

In this case I designed the flow to reserve bikes for one specific day. The app gets send to the same teachers I contacted in step 3, and I asked them to use the app a few times. Using analytics I can check the click paths, and see were the user drops off. All the feedback coming in gets mapped out in Trello.

</article-grid>
<article-grid :start="1" :end="11" :prose="false">

<image-inline>
    <g-image
      slot="image"
      class="w-auto"
      src="~/images/velotheek/velotheek4.png"
      alt="Screenshot of a Trello board, with feedback of users"
    />
    <span slot="caption">The Trello board for the intake of feedback.</span>
</image-inline>

</article-grid>
<article-grid :start="2" :end="10">

## Step 6: Live beta

</article-grid>
<article-grid :start="1" :end="11" :prose="false">
<image-inline>
    <g-image
      slot="image"
      class="w-auto"
      src="~/images/velotheek/velotheek_excalidraw_step5.png"
      alt="An scheme showing the timeline of the project. Highlighted is step 6: Live Beta"
    />  
</image-inline>
         
</article-grid>
<article-grid :start="2" :end="10">

<article-meta>
  <span slot="name">Duration</span>
  <span slot="content">As long as possible (still ongoing)</span>
</article-meta>

<article-meta>
  <span slot="name">Tools</span>
  <span slot="content">VueJS, Vuetify, Firebase, Analytics</span>
</article-meta>

I use the lessons of phase 4 to iterate on the code and create a prototype that can be used by a bigger group of people, that can actually be send out to a live audience. At this point I  want to start collecting quantitave data, so this is why scale becomes important. Depending how risk averse the client is, this app can be used in a fully live setting, as a beta version. Most important about this phase is the integration of an analytics suite (eg. Google Analytics) , and the possibility for users to easily send feedback.

</article-grid>
<article-grid :start="1" :end="11" :prose="false">
<image-inline>
    <g-image
      slot="image"
      class="w-auto"
      src="~/images/velotheek/velotheek1.gif"
      alt="An animation of the Velotheek as it is being used right now."
    />
    <span slot="caption">The Velotheek as it is being used right now.</span>
</image-inline>
</article-grid>
<article-grid :start="2" :end="10">
In this phase real users are using the app, and things will fail. It's important to make it very clear to your users that this is a beta app, that things will go wrong, and that their feedback is very appreciated.

During this period, I will regularly update the app, introduce new features or kick out existing ones, so the Beta can evolve towards an mature product .

## Step 7 and beyond: Analyse & Lessons Learned

After this phase, I collect all the learnings and together with the data I get from the analytics suite, create a brief for the organization that will create the official version of the tool.
</article-grid>