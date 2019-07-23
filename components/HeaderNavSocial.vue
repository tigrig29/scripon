<template>
  <ul class="Social">
    <li class="Social__Item">
      <a
        aria-label="Twitter"
        rel="noopener"
        target="_blank"
        href="https://twitter.com/TigRig_TRNS/"
        class="Social__Item__Link"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="75 75 250 250"
          focusable="false"
          role="img"
          class="Social__Item__Link__Icon Social__Item__Link__Icon--Twitter"
        >
          <title>Twitter</title>
          <path
            d="M153.62,301.59c94.34,0,145.94-78.16,145.94-145.94,0-2.22,0-4.43-.15-6.63A104.36,104.36,0,0,0,325,122.47a102.38,102.38,0,0,1-29.46,8.07,51.47,51.47,0,0,0,22.55-28.37,102.79,102.79,0,0,1-32.57,12.45,51.34,51.34,0,0,0-87.41,46.78A145.62,145.62,0,0,1,92.4,107.81a51.33,51.33,0,0,0,15.88,68.47A50.91,50.91,0,0,1,85,169.86c0,.21,0,.43,0,.65a51.31,51.31,0,0,0,41.15,50.28,51.21,51.21,0,0,1-23.16.88,51.35,51.35,0,0,0,47.92,35.62,102.92,102.92,0,0,1-63.7,22A104.41,104.41,0,0,1,75,278.55a145.21,145.21,0,0,0,78.62,23"
          />
        </svg>
      </a>
    </li>
    <li class="Social__Item">
      <a
        aria-label="GitHub"
        rel="noopener"
        target="_blank"
        href="https://github.com/tigrig29/scripon/"
        class="Social__Item__Link"
        ><svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          focusable="false"
          role="img"
          class="Social__Item__Link__Icon Social__Item__Link__Icon--Github"
        >
          <title>GitHub</title>
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M16,0.4c-8.8,0-16,7.2-16,16c0,7.1,4.6,13.1,10.9,15.2 c0.8,0.1,1.1-0.3,1.1-0.8c0-0.4,0-1.4,0-2.7c-4.5,1-5.4-2.1-5.4-2.1c-0.7-1.8-1.8-2.3-1.8-2.3c-1.5-1,0.1-1,0.1-1 c1.6,0.1,2.5,1.6,2.5,1.6c1.4,2.4,3.7,1.7,4.7,1.3c0.1-1,0.6-1.7,1-2.1c-3.6-0.4-7.3-1.8-7.3-7.9c0-1.7,0.6-3.2,1.6-4.3 c-0.2-0.4-0.7-2,0.2-4.2c0,0,1.3-0.4,4.4,1.6c1.3-0.4,2.6-0.5,4-0.5c1.4,0,2.7,0.2,4,0.5C23.1,6.6,24.4,7,24.4,7 c0.9,2.2,0.3,3.8,0.2,4.2c1,1.1,1.6,2.5,1.6,4.3c0,6.1-3.7,7.5-7.3,7.9c0.6,0.5,1.1,1.5,1.1,3c0,2.1,0,3.9,0,4.4 c0,0.4,0.3,0.9,1.1,0.8C27.4,29.5,32,23.5,32,16.4C32,7.6,24.8,0.4,16,0.4z"
          ></path>
        </svg>
      </a>
    </li>
    <li class="Social__Item">
      <a
        aria-label="Youtube"
        rel="noopener"
        target="_blank"
        href="https://ofuse.me/#users/11838"
        class="Social__Item__Support link-button color-green"
      >
        <span class="Social__Item__Support__Text link-button-text">
          支援する
        </span>
      </a>
    </li>
  </ul>
</template>

<style lang="scss" scoped>
.Social {
  display: flex;
  list-style: none;
  margin-right: $space-sm;
  padding: 0;
  &__Item {
    display: flex;
    align-items: center;
    margin-left: $space-base;
    &__Link {
      &__Icon {
        width: $font-size-base;
        height: 30px;
        fill: currentColor;
        @media (min-width: $--md) {
          width: $font-size-lg;
        }
        &--Github {
          color: $--color-github;
        }
        &--Twitter {
          color: $--color-twitter;
        }
        &--Youtube {
          color: $--color-youtube;
        }
      }
    }
    &__Support {
      padding: $space-xs $space-sm;
      border-radius: $space-xs;
      font-size: $font-size-sm;
    }
  }
}
</style>
