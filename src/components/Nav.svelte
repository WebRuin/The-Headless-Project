<script>
	export let segment;
</script>

<style>
	nav {
		font-weight: 300;
		height: 100%;
	}

	ul {
		margin: 0;
		padding: 0;
		height: inherit;
	}

	/* clearfix */
	ul::after {
		content: '';
		display: block;
		clear: both;
	}

	li {
		display: block;
		float: left;
		height: inherit;
	}

	.selected {
		display: flex;
		align-items: center;
		color: #161d20;
		background: rgba(255,62,0,0.5);
	}

	a {
		text-decoration: none;
		padding: 1em 0.5em;
		margin-top: -1.5rem;
		display: flex;
		align-items: center;
		height: inherit;
	}
</style>

<nav>
	<ul>
		<li><a rel=prefetch class='{segment === undefined ? "selected" : ""}' href='.'>home</a></li>
		<li><a class='{segment === "about" ? "selected" : ""}' href='about'>about</a></li>	
	</ul>
</nav>
