import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  
    <div>
  <meta charSet="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Website</title>
  <link href="https://fonts.googleapis.com/css?family=Cardo:400,700|Oswald" rel="stylesheet" />
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css" />
  <link href="/src/components/styles.css" rel="stylesheet" />
  <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
  <link rel="preconnect" href="https://fonts.gstatic.com" />
  <link href="https://fonts.googleapis.com/css2?family=Walter+Turncoat&display=swap" rel="stylesheet" />
  <div className="mainCont" scroll="no">
    <div className="cont cont1 currentPage">
      <div className="cont-body">
        <div className="container">
          <h1>Hello Stranger</h1>
          <br />
        </div>
        <button id="down1" onclick="scrollDown()">
          <i className="bigSmall material-icons">arrow_downward</i>
        </button>
      </div>
    </div>
    <div className="cont cont2 down">
      <div className="bg-fade" />
      <svg width="100%" height="100%">
        <defs>
          <pattern id="hexagons" width={50} height="43.4" patternUnits="userSpaceOnUse" patternTransform="scale(5) translate(2) rotate(45)">
            <polygon points="24.8,22 37.3,29.2 37.3,43.7 24.8,50.9 12.3,43.7 12.3,29.2" id="hex" />
            <use xlinkHref="#hex" x={25} />
            <use xlinkHref="#hex" x={-25} />
            <use xlinkHref="#hex" x="12.5" y="-21.7" />
            <use xlinkHref="#hex" x="-12.5" y="-21.7" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#hexagons)" />
      </svg>
      <div className="cont-body">
        <div id="header-block" className="container">
          <h1>This is an h1</h1>
          <br />
          <h2>This is an h2</h2>
          <br />
          <h3>This is an h3</h3>
          <br />
          <h4>This is an h4</h4>
          <br />
          <h5>This is an h5</h5>
          <br />
          <h6>This is an h6</h6>
          <br />
          <blockquote>"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim
            ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur,
            adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid
            ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"</blockquote>
          <br />
          <button onclick="alert('It works')">This is a Button</button>
          <br />
          <br />
        </div>
      </div>
      <button className="navbuttop" onclick="scrollUp()">
        <i className="bigSmall material-icons">arrow_upward</i>
      </button>
      <button className="navbutbot" onclick="scrollDown()">
        <i className="bigSmall material-icons">arrow_downward</i>
      </button>
    </div>
    <div className="cont cont3 down">
      <div className="cont-body">
        <div className="container">
          <h1>This is an h1</h1>
          <br />
          <h2>This is an h2</h2>
          <br />
          <h3>This is an h3</h3>
          <br />
          <h4>This is an h4</h4>
          <br />
          <h5>This is an h5</h5>
          <br />
          <h6>This is an h6</h6>
          <br />
          <p>"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim
            ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur,
            adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid
            ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"</p>
          <br />
          <button onclick="alert('It works!')">This is a Button!</button>
          <br />
          <br />
          <p className="text">
            "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas
            sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam
            eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem
            vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
          </p>
          <p>WESITE.</p>
          <h5>Tae kim</h5>
        </div>
      </div>
      <button className="navbuttop" onclick="scrollUp()">
        <i className="bigSmall material-icons">arrow_upward</i>
      </button>
    </div>
  </div>
  <div id="root" /> --&gt;
  {/*
This HTML file is a template.
If you open it directly in the browser, you will see an empty page.

You can add webfonts, meta tags, or analytics to this file.
The build step will place the bundled scripts into the <body> tag.

To begin the development, run `npm start` in this folder.
To create a production bundle, use `npm run build`.
   
    
    
    
    <?php define('PAGE_PROTOCOL', (isset($_SERVER['https']) && $_SERVER['https'] === 'on') ? 'https' : 'http' ); ?>
<button type="button" class="share-btn floating-share-btn" data-toggle="modal" data-target="#shareModal">
	<i class="fa fa-share-alt"></i>
</button>

<div class="modal fade" id="shareModal" tabindex="-1" role="dialog" aria-labelledby="shareModal">
	<div class="modal-dialog modal-lg" role="document">
		<div class="modal-content">
			<div class="modal-header">
				<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
				<h4 class="modal-title" id="myModalLabel">Share this page</h4>
			</div>
			<div class="modal-body">
				<div class="copylink">
					<p>Copy and paste this code into your website.</p>
					<pre>&lt;a href="<?php echo 'http://'.$_SERVER['HTTP_HOST'].$_SERVER['REQUEST_URI']; ?>">Your Link Name&lt;/a&gt;</pre>
				</div><!-- /.copylink */}
  <div className="share-btns">
    <p>Share this page on your favorite Social network</p>
    <div className="row">
      <div className="col-sm-4">
        <a href="https://www.facebook.com/sharer/sharer.php?u=<?php echo PAGE_PROTOCOL.'://'.$_SERVER['HTTP_HOST'].$_SERVER['REQUEST_URI']; ?>" className="btn-facebook" onclick="return !window.open(this.href, 'facebook ', 'width=500,height=500')" target="_blank">
          <i className="fa fa-facebook" /> Facebook
        </a>
      </div>
      <div className="col-sm-4">
        <a href="https://www.twitter.com/home?status=<?php echo PAGE_PROTOCOL.'://'.$_SERVER['HTTP_HOST'].$_SERVER['REQUEST_URI']; ?>" className="btn-twitter" onclick="return !window.open(this.href, 'twitter ', 'width=500,height=500')" target="_blank">
          <i className="fa fa-twitter" /> Twitter
        </a>
      </div>
      <div className="col-sm-4">
        <a href="https://www.reddit.com/submit?url=<?php echo PAGE_PROTOCOL.'://'.$_SERVER['HTTP_HOST'].$_SERVER['REQUEST_URI']; ?>" className="btn-reddit" onclick="return !window.open(this.href, 'redit ', 'width=500,height=500')" target="_blank">
          <i className="fa fa-reddit" /> Reddit
        </a>
      </div>
    </div>
    {/* /.row */}
  </div>
  {/* /.share-btns */}
  <button type="button" className="btn btn-success btn-lg" data-dismiss="modal">Close</button>
  {/* /.modal-body */}
  {/* /.modal-dialog */}
  {/* /.modal */}
  {/* Share widget make into an include file */}
</div>

 
)

export default IndexPage
