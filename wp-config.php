<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/documentation/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'vtraveldemo' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', '' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         '>,PNzWRW+(9#5b wT}rM9RfIuN7jYdHtAZ:S KwHTpC|3+-T&z2<P1D*L/A[A?Yh' );
define( 'SECURE_AUTH_KEY',  '$9 @yg7G<>,0)/--r4M@H A,O$yW&%?i?Dr=EyUgQ}7kj!eeWyDX@(FQ~ {Ip<o,' );
define( 'LOGGED_IN_KEY',    'IW}1d@elL&x%D}2FQH^|Z+{UyHWDz1szo_K&a{8YO`:);l?;5lYVa(_,EMcA+KA ' );
define( 'NONCE_KEY',        'g8A_vD/e8(N;M]0JL;^F`iLgHthr[Wjh:V@{g0;uDW#i/PZX.[G6-C71C3bDK@q}' );
define( 'AUTH_SALT',        'K=73hsM@WdOdu60wx5(7D=WmS`L}Kx0(T{jhv%Qj,/<(E4:.ix}6DvoxcRa!?4MR' );
define( 'SECURE_AUTH_SALT', 'e%qG1%EKeF1lkEn%ypD%,^J_9<fW_}<YY(6C4R;mMk4yATl)Wddq+bb!V?7aAxy>' );
define( 'LOGGED_IN_SALT',   '%=gpH*W^2W*C9/(a_UhbVfOPh` 2XmSnG}ST]P2}(b8 ~:O{y;,P4bP^S,Gm`%iN' );
define( 'NONCE_SALT',       ']k{%+Q:/Fk5C4giR>?az$bdxm4.^lT*L^k/~.glSk-tw[I@]%uE!mvNB8VvF3ShM' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/documentation/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
