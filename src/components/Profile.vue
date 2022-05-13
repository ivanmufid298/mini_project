<template>
  <div>
    <div class="card bg border-0 shadow my-5">
      <br />
      <br />
      <br />
      <div class="container-fluid mt-5">
        <div class="row">
          <div class="col-6">
            <h1><strong>Electric City Profile</strong></h1>
            <h3>In your Age</h3>
            <br />
            <p style="font-size: 1.45em">
              We started from humble beginnings back in 1999 with a small shop
              in Huddersfield and we’ve quickly grown to become the UKs largest
              online laptop specialist. We’re still based in Huddersfield but we
              now have a huge head office which features a massive showroom
              showing off the latest laptops, netbooks, tablets, TVs and kitchen
              appliances. We also have a purpose built distribution centre in
              Huthwaite where we despatch well over 1000 orders every day! We’re
              passionate about what we do and it’s our mission is to bring you
              the best deals in the UK from all the leading brands, whilst also
              offering the best possible advice through our specialist trained
              sales team who collectively have over 100 years experience. We’re
              not going anywhere! Unlike some of our competitors we don’t have
              shareholders so we can focus on giving you our best possible deals
              and prices rather than trying to make money to pay bonuses! We’ve
              grown every year since entering the online market in 2000 and we
              don’t intend to stop. If you want to look at the other businesses
              we operate please click here to visit our Buy it Direct Group
              page.
            </p>
            <button class="btn btn-outline-primary">
              <router-link style="text-decoration: none; color: black" to="/"
                >Home</router-link
              >
            </button>
          </div>
          <div class="col-6">
            <img
              class="img-fluid"
              style="width: 80%"
              src="../assets/profile1.jpg"
            />
          </div>
        </div>
      </div>
    </div>

    <div class="card card1 bg border-0 shadow my-5">
      <br />
      <br />
      <br />
      <div class="container-fluid mt-5 text-center" style="width: 100em">
        <h1><strong>Why our customers keep coming back</strong></h1>
        <br />
        <br />
        <div class="row">
          <div class="col-4">
            <img
              src="https://www.laptopsdirect.co.uk/files/images/ld/ld-about-us-returns.png"
              alt=""
            />
            <h1>No Quibble Returns.</h1>
            <p>
              Worried you might have made the wrong choice? With our no quibble
              return policy you can send it back to us and get a full refund up
              to 14 days after you've received your order. Whether you've picked
              the wrong product or just changed your mind you can send your
              order back to us and you'll get all your money back. Click here
              for more information.Buying for a business? Please see our
              commercial terms and conditions
            </p>
          </div>
          <div class="col-4">
            <img
              src="https://www.laptopsdirect.co.uk/files/images/ld/ld-about-us-cs.png"
              alt=""
            />
            <h1>Dedicated Customer Support</h1>
            <p>
              you have a question, a problem or a query with anything you've
              bought from us then we want to hear it. We've got a dedicated
              customer support team ready and waiting to deal with any of your
              issues, so you can be confident that there's always help at hand.
              Either pick up the phone and give us a call direct or get online
              and send us an e-message. However you contact us, we'll aim to
              sort out any problem you have as quickly and effectively as
              possible.
            </p>
          </div>
          <div class="col-4">
            <img
              src="https://www.laptopsdirect.co.uk/files/images/ld/ld-about-us-expert.png"
              alt=""
            />
            <h1>Expert Advice</h1>
            <p>
              Unlike our competitors, we want to hear from you! We have a team
              of experts on hand to help you choose the right laptop for your
              needs. Each and every order is checked by one of our team to
              ensure the products you've chosen are suitably matched, and if we
              have any special offers or alternatives that we think might be
              better suited we'll get in touch to discuss the options with you.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.card {
  max-width: 1900px;
  margin: auto;
  width: 1900px;
  height: 800px;
}
.card1 {
  max-width: 1900px;
  margin: auto;
  width: auto;
  height: 700px;
}
</style>
