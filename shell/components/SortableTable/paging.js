import { ROWS_PER_PAGE } from '@shell/store/prefs';

export default {
  computed: {
    totalRows() {
      console.warn('ss', 'mixins', 'paging', 'computed', 'totalrows', this.externalPaginationResult);
      if (this.externalPagination) {
        return this.externalPaginationResult?.count || 0;
      }

      return this.filteredRows.length;
    },

    indexFrom() {
      return Math.max(0, 1 + this.perPage * (this.page - 1));
    },

    indexTo() {
      return Math.min(this.totalRows, this.indexFrom + this.perPage - 1);
    },

    totalPages() {
      return Math.ceil(this.totalRows / this.perPage );
    },

    showPaging() {
      return !this.loading && this.paging && this.totalPages > 1;
    },

    pagingDisplay() {
      const opt = {
        ...(this.pagingParams || {}),

        count: this.totalRows,
        pages: this.totalPages,
        from:  this.indexFrom,
        to:    this.indexTo,
      };

      return this.$store.getters['i18n/t'](this.pagingLabel, opt);
    },

    pagedRows() {
      console.warn('sortable', 'mixin', 'paging', 'pagedRows', this.externalPagination);
      if (this.externalPagination) {
        return this.rows;
      } else if ( this.paging ) {
        return this.filteredRows.slice(this.indexFrom - 1, this.indexTo);
      } else {
        return this.filteredRows;
      }
    }
  },

  data() {
    const perPage = this.getPerPage();

    return { page: 1, perPage };
  },

  watch: {
    pagedRows() {
      // Go to the last page if we end up "past" the last page because the table changed

      const from = this.indexFrom;
      const last = this.totalRows;

      if ( this.totalPages > 0 && this.page > 1 && from > last ) {
        this.setPage(this.totalPages);
      }
    },

    page() {
      this.paginationChanged();
    },

    perPage() {
      this.paginationChanged();
    },

  },

  methods: {
    getPerPage() {
      // perPage can not change while the list is displayed
      let out = this.rowsPerPage || 0;

      if ( out <= 0 ) {
        out = parseInt(this.$store.getters['prefs/get'](ROWS_PER_PAGE), 10) || 0;
      }

      // This should ideally never happen, but the preference value could be invalid, so return something...
      if ( out <= 0 ) {
        out = 10;
      }

      return out;
    },

    setPage(num) {
      if (this.page === num) {
        return;
      }

      this.page = num;
    },

    goToPage(which) {
      let page;

      switch (which) {
      case 'first':
        page = 1;
        break;
      case 'prev':
        page = Math.max(1, this.page - 1 );
        break;
      case 'next':
        page = Math.min(this.totalPages, this.page + 1 );
        break;
      case 'last':
        page = this.totalPages;
        break;
      }

      this.setPage(page);
    }
  }
};
