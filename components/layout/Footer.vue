<template>
  <footer class="footer">
    <div class="footer--inner">
      <div class="footer--content">
        <LogoContainer :is-inverted="true" />
        <div class="footer--content-groups">
          <div class="footer--content-group">
            <h2>{{ $t('footer.group1title') }}</h2>
            <ul>
              <li><NuxtLinkLocale to="about">{{ $t('links.about') }}</NuxtLinkLocale></li>
              <li><NuxtLinkLocale to="faq">{{ $t('links.faq') }}</NuxtLinkLocale></li>
              <li><NuxtLinkLocale to="contribute">{{ $t('links.contribute') }}</NuxtLinkLocale></li>
            </ul>
          </div>
          <div class="footer--content-group">
            <h2>{{ $t('footer.group2title') }}</h2>
            <ul>
              <li><NuxtLinkLocale to="/privacy">{{ $t('links.privacy') }}</NuxtLinkLocale></li>
              <li><NuxtLinkLocale to="/imprint">{{ $t('links.imprint') }}</NuxtLinkLocale></li>
            </ul>
          </div>
        </div>
      </div>
      <div class="footer--copyright">
        <span>&copy; {{ year }} European Products</span>
      </div>
      <div class="footer--disclaimer">
        <span>{{ $t('footer.disclaimer') }}</span>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">

import LogoContainer from "~/components/common/LogoContainer.vue";

const year: number = new Date().getFullYear();
</script>

<style lang="scss">
.footer {
  width: 100%;
  background: var(--color-eu-blue);
  color: var(--color-font-light);
  padding: var(--spacing-small) var(--spacing-medium) var(--spacing-medium) var(--spacing-medium) ;

  &--inner {
    max-width: var(--max-content-width);
    margin: 0 auto;
  }

  &--content {
    display: flex;
    gap: var(--spacing-large);

    &-groups {
      display: flex;
      flex-grow: 1;
      gap: calc(var(--spacing-large) * 2);
      justify-content: flex-end;
    }

    &-group {
      h2 {
        font-size: var(--font-size-h4);
        color: var(--color-font-light);
        margin-bottom: 0;
      }

      ul {
        list-style: none;
        padding: 0;

        li {
          margin-bottom: var(--spacing-small);
        }
      }
    }

    .logo-container {
      flex-shrink: 0;
    }
  }

  &--copyright,
  &--disclaimer{
    text-align: center;
  }

  &--copyright {
    margin: var(--spacing-medium) 0;
  }

  &--disclaimer {
    font-size: var(--font-size-small);
    margin-top: var(--spacing-small);
  }

  a {
    color: var(--color-font-light);
    text-decoration: none;
  }
}
</style>