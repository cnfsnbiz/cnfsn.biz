var container, stats;

var camera, controls, scene, renderer;

//var mouseX = 0, mouseY = 0;

var windowHalfX = window.innerWidth / 2;
var windowHalfY = window.innerHeight / 2;


init();
animate();


function init() {

    container = document.getElementById('holder')
    //document.body.appendChild( container );

    camera = new THREE.PerspectiveCamera( 36, window.innerWidth / window.innerHeight, 1, 500 );
    camera.position.z = 14;

    controls = new THREE.OrbitControls( camera );
    controls.addEventListener( 'change', render );
    // scene

    scene = new THREE.Scene();

    // lights

    light = new THREE.DirectionalLight( 0xffffff );
    light.position.set( 0, 0.25, 0.5 );
    scene.add( light );

    light = new THREE.DirectionalLight( 0xffffff );
    light.position.set( 0, -0.25, -0.5 );
    scene.add( light );

    light = new THREE.AmbientLight( 0xffffff );
    scene.add( light );

    // model

    var loader = new THREE.OBJMTLLoader();
    loader.load( '/src/CNFSN.obj', '/src/CNFSN.mtl', function ( object ) {
        object.position.y = 0;
        scene.add( object );
    } );

    //

    renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize( window.innerWidth, window.innerHeight );
    container.appendChild( renderer.domElement );

    //

    window.addEventListener( 'resize', onWindowResize, false );

}

function onWindowResize() {

    windowHalfX = window.innerWidth / 2;
    windowHalfY = window.innerHeight / 2;

    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize( window.innerWidth, window.innerHeight );
    render();
}

function animate() {

    requestAnimationFrame( animate );
    render();

}

function render() {

    camera.position.x += .01;
    camera.lookAt( scene.position );
    renderer.render( scene, camera );

}